// List of data that can be downloaded

//Transition Map – Sub types (as visible on the TMF explorer):	projects/JRC/TMF/v1_2021/TransitionMap_Subtypes
//Transition Map - Main Classes:	projects/JRC/TMF/v1_2021/TransitionMap_MainClasses
//Annual change collection (1990-2021):	projects/JRC/TMF/v1_2021/AnnualChanges
//Deforestation Year:	projects/JRC/TMF/v1_2021/DeforestationYear
//Degradation Year:	projects/JRC/TMF/v1_2021/DegradationYear
//Areas of deforestation after degradation:	projects/JRC/TMF/v1_2021/DeforestationAfterDegradation
//Deforestation after degradation Year:	projects/JRC/TMF/v1_2021/DeforestationAfterDegradationYear
//Areas of deforestation after Regrowth: projects/JRC/TMF/v1_2021/DeforestationAfterRegrowth
//Intensity:	projects/JRC/TMF/v1_2021/Intensity
//Duration:	projects/JRC/TMF/v1_2021/Duration
//Annual Valid Observations 1982-2020:	projects/JRC/TMF/v1_2020/AnnualValidObs
//Annual Disruption Observations 1982-2020:	projects/JRC/TMF/v1_2020/AnnualDisruptionObs
//Annual Valid Observations in 2021:	projects/JRC/TMF/v1_2021/AnnualValidObs2021
//Annual Disruption Observations in 2021:	projects/JRC/TMF/v1_2021/AnnualDisruptionObs2021
//First year of the monitoring period:projects/JRC/TMF/v1_2021/StartMonitoringPeriod

// Download: country-wide
var worldcountries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
//https://en.wikipedia.org/wiki/List_of_FIPS_country_codes
var list = ee.List(['CG']); //Ivory Coast
var ROI = worldcountries.filter(ee.Filter.inList('country_co',list));


//TMF layer of interest, for instance the "DegradationYear"
var DegradationYear = ee.ImageCollection('projects/JRC/TMF/v1_2021/DegradationYear').mosaic().clip(ROI);

// Export to google drive as GeoTIFF raster
Export.image.toDrive({
  image: DegradationYear,
  description: 'JRC_TMF_DegradationYear_ROI',
  scale: 30,
  region: ROI.geometry(), 
  crs: 'EPSG:4326',
  maxPixels:1e13,
  fileFormat: 'GeoTIFF',
  formatOptions: {
    cloudOptimized: true
  }
});

//TMF layer of interest, for instance the "Transition Map - Main Classes"
var DegradationYear = ee.ImageCollection('projects/JRC/TMF/v1_2021/TransitionMap_MainClasses').mosaic().clip(ROI);

// Export to google drive as GeoTIFF raster
Export.image.toDrive({
  image: DegradationYear,
  description: 'JRC_TMF_TransitionMap_MainClasses_ROI',
  scale: 30,
  region: ROI.geometry(), 
  crs: 'EPSG:4326',
  maxPixels:1e13,
  fileFormat: 'GeoTIFF',
  formatOptions: {
    cloudOptimized: true
  }
});
