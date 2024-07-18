export interface MenuFactor {
  title: string
  dataCode: string
  child?: Array<{ elementCode: string; title: string; element: string }>
}

export interface MenuActuality {
  title: string
  element: string
  dataCode: string
  variable: string
  span: string
}

export interface MenuRadar {
  title: string
  dataCode: string
  child?: {
    title: string
    dataCode: string
    stationList?: RadarStationItem[]
  }
}

export interface RadarStationItem {
  stationCode: string
  stationName: string
}
