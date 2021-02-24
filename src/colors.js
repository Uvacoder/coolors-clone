const colors = [
  [
    {
      hex: "#FFEBEE"
    },
    {
      hex: "#FFCDD2"
    },
    {
      hex: "#EF9A9A"
    },
    {
      hex: "#E57373"
    },
    {
      hex: "#EF5350"
    },
    {
      hex: "#F44336"
    },
    {
      hex: "#E53935"
    },
    {
      hex: "#D32F2F"
    },
    {
      hex: "#C62828"
    },
    {
      hex: "#B71C1C"
    },
    {
      hex: "#FF8A80"
    },
    {
      hex: "#FF5252"
    },
    {
      hex: "#FF1744"
    },
    {
      hex: "#D50000"
    }
  ],
  [
    {
      hex: "#FCE4EC"
    },
    {
      hex: "#F8BBD0"
    },
    {
      hex: "#F48FB1"
    },
    {
      hex: "#F06292"
    },
    {
      hex: "#EC407A"
    },
    {
      hex: "#E91E63"
    },
    {
      hex: "#D81B60"
    },
    {
      hex: "#C2185B"
    },
    {
      hex: "#AD1457"
    },
    {
      hex: "#880E4F"
    },
    {
      hex: "#FF80AB"
    },
    {
      hex: "#FF4081"
    },
    {
      hex: "#F50057"
    },
    {
      hex: "#C51162"
    }
  ],
  [
    {
      hex: "#F3E5F5"
    },
    {
      hex: "#E1BEE7"
    },
    {
      hex: "#CE93D8"
    },
    {
      hex: "#BA68C8"
    },
    {
      hex: "#AB47BC"
    },
    {
      hex: "#9C27B0"
    },
    {
      hex: "#8E24AA"
    },
    {
      hex: "#7B1FA2"
    },
    {
      hex: "#6A1B9A"
    },
    {
      hex: "#4A148C"
    },
    {
      hex: "#EA80FC"
    },
    {
      hex: "#E040FB"
    },
    {
      hex: "#D500F9"
    },
    {
      hex: "#AA00FF"
    }
  ],
  [
    {
      hex: "#EDE7F6"
    },
    {
      hex: "#D1C4E9"
    },
    {
      hex: "#B39DDB"
    },
    {
      hex: "#9575CD"
    },
    {
      hex: "#7E57C2"
    },
    {
      hex: "#673AB7"
    },
    {
      hex: "#5E35B1"
    },
    {
      hex: "#512DA8"
    },
    {
      hex: "#4527A0"
    },
    {
      hex: "#311B92"
    },
    {
      hex: "#B388FF"
    },
    {
      hex: "#7C4DFF"
    },
    {
      hex: "#651FFF"
    },
    {
      hex: "#6200EA"
    }
  ],
  [
    {
      hex: "#E8EAF6"
    },
    {
      hex: "#C5CAE9"
    },
    {
      hex: "#9FA8DA"
    },
    {
      hex: "#7986CB"
    },
    {
      hex: "#5C6BC0"
    },
    {
      hex: "#3F51B5"
    },
    {
      hex: "#3949AB"
    },
    {
      hex: "#303F9F"
    },
    {
      hex: "#283593"
    },
    {
      hex: "#1A237E"
    },
    {
      hex: "#8C9EFF"
    },
    {
      hex: "#536DFE"
    },
    {
      hex: "#3D5AFE"
    },
    {
      hex: "#304FFE"
    }
  ],
  [
    {
      hex: "#E3F2FD"
    },
    {
      hex: "#BBDEFB"
    },
    {
      hex: "#90CAF9"
    },
    {
      hex: "#64B5F6"
    },
    {
      hex: "#42A5F5"
    },
    {
      hex: "#2196F3"
    },
    {
      hex: "#1E88E5"
    },
    {
      hex: "#1976D2"
    },
    {
      hex: "#1565C0"
    },
    {
      hex: "#0D47A1"
    },
    {
      hex: "#82B1FF"
    },
    {
      hex: "#448AFF"
    },
    {
      hex: "#2979FF"
    },
    {
      hex: "#2962FF"
    }
  ],
  [
    {
      hex: "#E1F5FE"
    },
    {
      hex: "#B3E5FC"
    },
    {
      hex: "#81D4FA"
    },
    {
      hex: "#4FC3F7"
    },
    {
      hex: "#29B6F6"
    },
    {
      hex: "#03A9F4"
    },
    {
      hex: "#039BE5"
    },
    {
      hex: "#0288D1"
    },
    {
      hex: "#0277BD"
    },
    {
      hex: "#01579B"
    },
    {
      hex: "#80D8FF"
    },
    {
      hex: "#40C4FF"
    },
    {
      hex: "#00B0FF"
    },
    {
      hex: "#0091EA"
    }
  ],
  [
    {
      hex: "#E0F7FA"
    },
    {
      hex: "#B2EBF2"
    },
    {
      hex: "#80DEEA"
    },
    {
      hex: "#4DD0E1"
    },
    {
      hex: "#26C6DA"
    },
    {
      hex: "#00BCD4"
    },
    {
      hex: "#00ACC1"
    },
    {
      hex: "#0097A7"
    },
    {
      hex: "#00838F"
    },
    {
      hex: "#006064"
    },
    {
      hex: "#84FFFF"
    },
    {
      hex: "#18FFFF"
    },
    {
      hex: "#00E5FF"
    },
    {
      hex: "#00B8D4"
    }
  ],
  [
    {
      hex: "#E0F2F1"
    },
    {
      hex: "#B2DFDB"
    },
    {
      hex: "#80CBC4"
    },
    {
      hex: "#4DB6AC"
    },
    {
      hex: "#26A69A"
    },
    {
      hex: "#009688"
    },
    {
      hex: "#00897B"
    },
    {
      hex: "#00796B"
    },
    {
      hex: "#00695C"
    },
    {
      hex: "#004D40"
    },
    {
      hex: "#A7FFEB"
    },
    {
      hex: "#64FFDA"
    },
    {
      hex: "#1DE9B6"
    },
    {
      hex: "#00BFA5"
    }
  ],
  [
    {
      hex: "#E8F5E9"
    },
    {
      hex: "#C8E6C9"
    },
    {
      hex: "#A5D6A7"
    },
    {
      hex: "#81C784"
    },
    {
      hex: "#66BB6A"
    },
    {
      hex: "#4CAF50"
    },
    {
      hex: "#43A047"
    },
    {
      hex: "#388E3C"
    },
    {
      hex: "#2E7D32"
    },
    {
      hex: "#1B5E20"
    },
    {
      hex: "#B9F6CA"
    },
    {
      hex: "#69F0AE"
    },
    {
      hex: "#00E676"
    },
    {
      hex: "#00C853"
    }
  ],
  [
    {
      hex: "#F1F8E9"
    },
    {
      hex: "#DCEDC8"
    },
    {
      hex: "#C5E1A5"
    },
    {
      hex: "#AED581"
    },
    {
      hex: "#9CCC65"
    },
    {
      hex: "#8BC34A"
    },
    {
      hex: "#7CB342"
    },
    {
      hex: "#689F38"
    },
    {
      hex: "#558B2F"
    },
    {
      hex: "#33691E"
    },
    {
      hex: "#CCFF90"
    },
    {
      hex: "#B2FF59"
    },
    {
      hex: "#76FF03"
    },
    {
      hex: "#64DD17"
    }
  ],
  [
    {
      hex: "#F9FBE7"
    },
    {
      hex: "#F0F4C3"
    },
    {
      hex: "#E6EE9C"
    },
    {
      hex: "#DCE775"
    },
    {
      hex: "#D4E157"
    },
    {
      hex: "#CDDC39"
    },
    {
      hex: "#C0CA33"
    },
    {
      hex: "#AFB42B"
    },
    {
      hex: "#9E9D24"
    },
    {
      hex: "#827717"
    },
    {
      hex: "#F4FF81"
    },
    {
      hex: "#EEFF41"
    },
    {
      hex: "#C6FF00"
    },
    {
      hex: "#AEEA00"
    }
  ],
  [
    {
      hex: "#FFFDE7"
    },
    {
      hex: "#FFF9C4"
    },
    {
      hex: "#FFF59D"
    },
    {
      hex: "#FFF176"
    },
    {
      hex: "#FFEE58"
    },
    {
      hex: "#FFEB3B"
    },
    {
      hex: "#FDD835"
    },
    {
      hex: "#FBC02D"
    },
    {
      hex: "#F9A825"
    },
    {
      hex: "#F57F17"
    },
    {
      hex: "#FFFF8D"
    },
    {
      hex: "#FFFF00"
    },
    {
      hex: "#FFEA00"
    },
    {
      hex: "#FFD600"
    }
  ],
  [
    {
      hex: "#FFF8E1"
    },
    {
      hex: "#FFECB3"
    },
    {
      hex: "#FFE082"
    },
    {
      hex: "#FFD54F"
    },
    {
      hex: "#FFCA28"
    },
    {
      hex: "#FFC107"
    },
    {
      hex: "#FFB300"
    },
    {
      hex: "#FFA000"
    },
    {
      hex: "#FF8F00"
    },
    {
      hex: "#FF6F00"
    },
    {
      hex: "#FFE57F"
    },
    {
      hex: "#FFD740"
    },
    {
      hex: "#FFC400"
    },
    {
      hex: "#FFAB00"
    }
  ],
  [
    {
      hex: "#FFF3E0"
    },
    {
      hex: "#FFE0B2"
    },
    {
      hex: "#FFCC80"
    },
    {
      hex: "#FFB74D"
    },
    {
      hex: "#FFA726"
    },
    {
      hex: "#FF9800"
    },
    {
      hex: "#FB8C00"
    },
    {
      hex: "#F57C00"
    },
    {
      hex: "#EF6C00"
    },
    {
      hex: "#E65100"
    },
    {
      hex: "#FFD180"
    },
    {
      hex: "#FFAB40"
    },
    {
      hex: "#FF9100"
    },
    {
      hex: "#FF6D00"
    }
  ],
  [
    {
      hex: "#FBE9E7"
    },
    {
      hex: "#FFCCBC"
    },
    {
      hex: "#FFAB91"
    },
    {
      hex: "#FF8A65"
    },
    {
      hex: "#FF7043"
    },
    {
      hex: "#FF5722"
    },
    {
      hex: "#F4511E"
    },
    {
      hex: "#E64A19"
    },
    {
      hex: "#D84315"
    },
    {
      hex: "#BF360C"
    },
    {
      hex: "#FF9E80"
    },
    {
      hex: "#FF6E40"
    },
    {
      hex: "#FF3D00"
    },
    {
      hex: "#DD2C00"
    }
  ],
  [
    {
      hex: "#EFEBE9"
    },
    {
      hex: "#D7CCC8"
    },
    {
      hex: "#BCAAA4"
    },
    {
      hex: "#A1887F"
    },
    {
      hex: "#8D6E63"
    },
    {
      hex: "#795548"
    },
    {
      hex: "#6D4C41"
    },
    {
      hex: "#5D4037"
    },
    {
      hex: "#4E342E"
    },
    {
      hex: "#3E2723"
    }
  ],
  [
    {
      hex: "#FAFAFA"
    },
    {
      hex: "#F5F5F5"
    },
    {
      hex: "#EEEEEE"
    },
    {
      hex: "#E0E0E0"
    },
    {
      hex: "#BDBDBD"
    },
    {
      hex: "#9E9E9E"
    },
    {
      hex: "#757575"
    },
    {
      hex: "#616161"
    },
    {
      hex: "#424242"
    },
    {
      hex: "#212121"
    }
  ],
  [
    {
      hex: "#ECEFF1"
    },
    {
      hex: "#CFD8DC"
    },
    {
      hex: "#B0BEC5"
    },
    {
      hex: "#90A4AE"
    },
    {
      hex: "#78909C"
    },
    {
      hex: "#607D8B"
    },
    {
      hex: "#546E7A"
    },
    {
      hex: "#455A64"
    },
    {
      hex: "#37474F"
    },
    {
      hex: "#263238"
    }
  ],
  [
    {
      hex: "#000000"
    },
    {
      hex: "#FFFFFF"
    }
  ]
];

export default colors;
