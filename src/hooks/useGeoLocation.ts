import { useState, useEffect } from 'react'

interface GeoLocationData {
  country: string
  countryCode: string
  region: string
  city: string
}

export const useGeoLocation = () => {
  const [location, setLocation] = useState<GeoLocationData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        console.log('开始获取地理位置...')

        // 尝试多个API作为备用方案
        let data: GeoLocationData | null = null
        let apiUsed = ''

        // 方案1: ipapi.co (主要)
        try {
          console.log('尝试ipapi.co...')
          const response = await fetch('https://ipapi.co/json/')
          if (response.ok) {
            const apiData = await response.json()
            console.log('ipapi.co返回:', apiData)
            if (apiData && apiData.country_code) {
              data = {
                country: apiData.country_name || '',
                countryCode: apiData.country_code,
                region: apiData.region || '',
                city: apiData.city || ''
              }
              apiUsed = 'ipapi.co'
            }
          }
        } catch (err) {
          console.log('ipapi.co失败:', err)
        }

        // 方案2: ip-api.com (备用)
        if (!data) {
          try {
            console.log('尝试ip-api.com...')
            const response = await fetch('http://ip-api.com/json/')
            if (response.ok) {
              const apiData = await response.json()
              console.log('ip-api.com返回:', apiData)
              if (apiData && apiData.countryCode && apiData.status === 'success') {
                data = {
                  country: apiData.country || '',
                  countryCode: apiData.countryCode,
                  region: apiData.regionName || '',
                  city: apiData.city || ''
                }
                apiUsed = 'ip-api.com'
              }
            }
          } catch (err) {
            console.log('ip-api.com失败:', err)
          }
        }

        // 方案3: 简化的备用方案 - 假设非欧盟/美国（仅用于测试）
        if (!data) {
          console.log('所有API都失败，使用默认值（非欧盟/美国）')
          // 为了测试，我们暂时假设用户不在欧盟/美国
          data = {
            country: 'Unknown',
            countryCode: 'XX', // 使用一个不会匹配欧盟/美国的代码
            region: 'Unknown',
            city: 'Unknown'
          }
          apiUsed = 'default'
        }

        if (data) {
          console.log(`使用${apiUsed}设置地理位置:`, data.countryCode)
          setLocation(data)
        } else {
          throw new Error('No location data available')
        }

      } catch (err) {
        console.error('地理位置获取失败:', err)
        setError('Unable to determine location')
        // 最后的备用方案：设置一个默认的非欧盟/美国位置
        console.log('设置默认非欧盟/美国位置')
        setLocation({
          country: 'Unknown',
          countryCode: 'XX',
          region: 'Unknown',
          city: 'Unknown'
        })
      } finally {
        setLoading(false)
      }
    }

    fetchLocation()
  }, [])

  // 检查是否为欧洲或美国地区
  const isEUOrUS = location ? (() => {
    // 欧洲国家代码列表
    const euCountries = [
      'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
      'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
      'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'UK'
    ]

    // 美国国家代码
    const usCountry = 'US'

    return euCountries.includes(location.countryCode) || location.countryCode === usCountry
  })() : false

  return {
    location,
    loading,
    error,
    isEUOrUS
  }
}
