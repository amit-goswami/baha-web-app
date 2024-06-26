import React from 'react'
import { IBestTreksList } from '@/features/home/home.interface'

const SUMMER_MONTHS = ['Mar', 'Apr', 'May', 'Jun']
const MONSOON_MONTHS = ['Jul', 'Aug', 'Sep', 'Oct']
const WINTER_MONTHS = ['Nov', 'Dec', 'Jan', 'Feb']

const getMonthsBySeason = (selectedFilters: string[]) => {
  if (selectedFilters.includes('SUMMER_MONTHS')) return SUMMER_MONTHS
  if (selectedFilters.includes('MONSOON_MONTHS')) return MONSOON_MONTHS
  if (selectedFilters.includes('WINTER_MONTHS')) return WINTER_MONTHS
  return []
}

export const useGetFilteredTreks = ({
  selectedFilters,
  selectedCity,
  bestTreksList,
  searchText
}: {
  selectedFilters: string[]
  selectedCity: string
  bestTreksList: IBestTreksList | null | undefined
  searchText: string
}) => {
  const [filteredTreks, setFilteredTreks] = React.useState<
    IBestTreksList | null | undefined
  >(null)

  React.useEffect(() => {
    if (
      selectedCity.includes('All Cities') &&
      selectedFilters.includes('All Seasons')
    ) {
      const filteredValueWithSearch = bestTreksList?.treks?.filter((trek) => {
        if (trek.trek_name.toLowerCase().includes(searchText.toLowerCase()))
          return trek
      })
      if (filteredValueWithSearch?.length === 0) return setFilteredTreks(null)
      return setFilteredTreks({
        treks: filteredValueWithSearch || []
      })
    }

    if (selectedCity === 'All Cities' && selectedFilters[0] !== 'All Seasons') {
      const filteredTreks = bestTreksList?.treks
        ?.filter((trek) =>
          trek.ideal_month.some((month) =>
            getMonthsBySeason(selectedFilters).includes(month)
          )
        )
        .filter((trek) => {
          if (trek.trek_name.toLowerCase().includes(searchText.toLowerCase()))
            return trek
        })

      if (filteredTreks?.length === 0) return setFilteredTreks(null)

      return setFilteredTreks({
        treks: filteredTreks || []
      })
    }

    if (selectedFilters[0] === 'All Seasons' && selectedCity !== 'All Cities') {
      const filteredTreks = bestTreksList?.treks
        ?.filter((trek) => {
          if (trek.state === selectedCity) return trek
        })
        .filter((trek) => {
          if (trek.trek_name.toLowerCase().includes(searchText.toLowerCase()))
            return trek
        })

      if (filteredTreks?.length === 0) return setFilteredTreks(null)

      return setFilteredTreks({
        treks: filteredTreks || []
      })
    }

    const filteredTreks = bestTreksList?.treks
      ?.filter((trek) => {
        if (
          trek.state === selectedCity &&
          trek.ideal_month.some((month) =>
            getMonthsBySeason(selectedFilters).includes(month)
          )
        )
          return trek
      })
      .filter((trek) => {
        if (trek.trek_name.toLowerCase().includes(searchText.toLowerCase()))
          return trek
      })

    if (filteredTreks?.length === 0) return setFilteredTreks(null)

    setFilteredTreks({
      treks: filteredTreks || []
    })
  }, [selectedFilters, bestTreksList, selectedCity, searchText])

  return { filteredTreks }
}
