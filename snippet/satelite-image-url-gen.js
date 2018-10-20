const createBbox = (centerLat, centerLon) => {
  // いい感じに変える
  const diffToLeftBottomLat = -15;
  const diffToRightTopLat = 15;
  const diffToLeftBottomLon = -15;
  const diffToRightTopLon = 15;

  const leftBottomLat = centerLat + diffToLeftBottomLat;
  const leftBottomLon = centerLon + diffToLeftBottomLon;
  const rightTopLat = centerLat + diffToRightTopLat;
  const rightTopLon = centerLon + diffToRightTopLon;

  return leftBottomLon + ',' + leftBottomLat + ',' + rightTopLon + ',' + rightTopLat;
}

// 明るさ温度
const LAYER_VIIRS_SNPP_Brightness_Temp_BandI5_Day = 'VIIRS_SNPP_Brightness_Temp_BandI5_Day';
// Cloud Top Height 
const LAYER_MODIS_Terra_Cloud_Top_Height_Day = 'MODIS_Terra_Cloud_Top_Height_Day';
// ダム
const LAYER_GRAND_V1_DAMS_REV01 = 'grand-v1-dams-rev01';
// 水のある地域
const LAYER_MODIS_WATER_MASK = 'MODIS_Water_Mask';
// 標高
const LAYER_ASTER_GDEM_COLOR_INDEX = 'ASTER_GDEM_Color_Index';
// 地すべり
const LAYER_NDH_LANDSLIDE_HAZARD_DISTRIBUTION_2000 = 'NDH_Landslide_Hazard_Distribution_2000';
// 2001−2010のPM2.5
const LAYER_PARTICULATE_MATTER_BELOW_2_5MICROMETERS_2001_2010 = 'Particulate_Matter_Below_2.5micrometers_2001-2010';
// 2020年の人口予測 
const LAYER_GPW_POPULATION_DENSITY_2020 = 'GPW_Population_Density_2020';
// 原子力発電所
const LAYER_ENERGY_POP_EXPOSURE_NUCLEAR_PLANTS_LOCATIONS_PLANTS = 'energy-pop-exposure-nuclear-plants-locations_plants';
// 集落の場所とひとの行く場所
const LAYER_GRUMP_V1_SETTLEMENT_POINTS_PLUS_HUMAN_FOOTPRINT = 'grump-v1-settlement-points,Human_Footprint_1995-2004';

const centerLat = 35.362222;
const centerLon = 138.731388;

const bbox = createBbox(centerLat, centerLon);
const date = '2018269';
const layer = VIIRS_SNPP_Brightness_Temp_BandI5_Day;
const width = 3000;
const height = 4000;

const url = `https://gibs.earthdata.nasa.gov/image-download?TIME=${date}&extent=${bbox}&epsg=4326&layers=${layer}&opacities=1,1&worldfile=false&format=image/png&width=${width}&height=${height}`;
console.log(url);