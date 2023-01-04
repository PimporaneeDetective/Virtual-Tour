(function(){
    var script = {
 "downloadEnabled": true,
 "start": "this.playAudioList([this.audio_740DED7A_7AD7_CC3F_41B7_28CCFBACD9F5]); this.init(); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_7C7D1240_6E0A_3F02_41C3_6509F657D584].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "children": [
  "this.MainViewer",
  "this.thumbnaillist5245",
  "this.label4056",
  "this.IconButton_7EAAF8EF_6E16_EB1D_41D4_605DB1125570",
  "this.IconButton_7C5A1D01_6E16_2505_4181_C912A287EFE5",
  "this.IconButton_7C7D1240_6E0A_3F02_41C3_6509F657D584",
  "this.IconButton_7F59CDFE_6E0A_24FE_41C0_F78ADADBB607",
  "this.IconButton_7ED39AF9_6E0A_2F05_41D2_51CF3D16E611",
  "this.IconButton_7F5EA6B2_6E0A_6707_41D0_91167AE781C9",
  "this.IconButton_7C68BF6B_6E0E_2505_41D8_F15015721E54"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_62A65118_736E_7930_41D3_560526C343C2",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_749D5321_7B1C_4389_41D8_D070595EC6FE",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Mckean water pumb",
 "hfovMin": "135%",
 "id": "panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB",
 "overlays": [
  "this.overlay_6A223D99_7343_F03C_41D9_A96D70E4E104",
  "this.overlay_6A76C676_7341_70F4_41D4_C74274D71C8D",
  "this.overlay_6A5DA5E8_7341_D01C_41CA_D5FB191E7D1F",
  "this.overlay_6A7C0626_7346_D014_4183_6919A2A2B250",
  "this.overlay_6E265499_7343_503C_41DC_12471F5EF195",
  "this.overlay_68C3D7E4_76C9_A769_41D2_38C9BFD05FF0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -156.55,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E",
   "backwardYaw": -118.58,
   "distance": 1
  },
  {
   "yaw": -171.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36",
   "backwardYaw": 143.68,
   "distance": 1
  },
  {
   "yaw": 165.67,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED",
   "backwardYaw": -134.31,
   "distance": 1
  },
  {
   "yaw": -98.15,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79751ACF_72C6_B015_41BE_A57AE535C940",
   "backwardYaw": 126.73,
   "distance": 1
  },
  {
   "yaw": -45.49,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796B28E3_72C7_500C_41DA_450F54B79F10",
   "backwardYaw": -131.29,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6AFE2BE8_76C8_EF79_41D9_33B2E5BEB0F7"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e2a\u0e16\u0e32\u0e19\u0e35\u0e01\u0e32\u0e0a\u0e32\u0e14\u0e17\u0e35\u0e48 3",
 "hfovMin": "130%",
 "id": "panorama_7A8E615F_76C9_BB57_41DD_685C1043C329",
 "overlays": [
  "this.overlay_66E19186_76C9_DBA9_41B4_34CCE1BBCE38",
  "this.overlay_6611925C_76C8_F959_41CE_2F86BCEF3AB5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 92.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0",
   "backwardYaw": -22.47,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_793ED6F1_76CB_D968_41CB_FA70D4F589C9"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_79699415_72C6_B034_41D9_C19923ABFD5E_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_62C860A9_7362_D710_41D7_EB75882EF1BE",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_7492B321_7B1C_4389_4190_72B13A0F2AA5",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 2.82,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 24.84
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Memmorial Mckean",
 "hfovMin": "135%",
 "id": "panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E",
 "overlays": [
  "this.overlay_6B039BD2_7341_F00C_41AD_FCE0A7668368",
  "this.overlay_6B276AC9_735E_B01C_41D2_687C8A79693A",
  "this.overlay_6B683B82_735F_700C_41CB_9BC51A6E4E5E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797491E6_72C7_5014_41CD_4848301827B2"
  },
  {
   "yaw": -118.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB",
   "backwardYaw": -156.55,
   "distance": 1
  },
  {
   "yaw": 135.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF",
   "backwardYaw": -146.27,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6AAE23B7_76C8_5FD7_41D1_598BDEE714A5"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_6FAE6505_76F9_B8AB_41D4_3AC47EB2FC7A",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_6FB07505_76F9_B8AB_41BA_1A2BE47E3574",
  "this.image_uid7498231F_7B1C_43B9_41DD_E07B84D4E4FA_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window46890"
 },
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e1b\u0e49\u0e32\u0e22\u0e2a\u0e16\u0e32\u0e19\u0e35\u0e01\u0e32\u0e0a\u0e32\u0e14\u0e17\u0e35\u0e48 3",
 "hfovMin": "135%",
 "id": "panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0",
 "overlays": [
  "this.overlay_7855A0CB_76CF_F9BF_41BF_466A03F6114A",
  "this.overlay_79C4A054_76C8_58A8_419D_3141CCEF06FA",
  "this.overlay_79D25F1A_76C9_A8D9_41D2_B0A06CDEFB4D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3"
  },
  {
   "yaw": -22.47,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A8E615F_76C9_BB57_41DD_685C1043C329",
   "backwardYaw": 92.22,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_66DACD34_76CB_E8E9_41D0_F6BC241C7342"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_6B6324A7_735E_B014_41C2_E509AB6E4B8B",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_6B6564A7_735E_B014_419B_4E30A4F145DF",
  "this.image_uid7468E314_7B1C_438F_41D5_5A2C1410F80F_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window51372"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_79681767_72C1_5014_41CD_0B8A95017A68_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_6077EF02_76C8_A8A9_4177_849BABCEE6CC",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_60753F02_76C8_A8A9_41B4_20914A5C7DAC"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window34988"
 },
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e2b\u0e21\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19\u0e2a\u0e32\u0e19\u0e1d\u0e31\u0e19 \u0e1a\u0e49\u0e32\u0e19\u0e1b\u0e39\u0e19",
 "hfovMin": "135%",
 "id": "panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F",
 "overlays": [
  "this.overlay_61568866_76C8_A969_41C3_938A7AC1A582",
  "this.overlay_6166BC0F_76C8_68B8_41B7_FF50C564AE9F",
  "this.overlay_6ECFD7AC_76C8_E7F9_41B9_27B553DB1C54"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -4.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797C3658_72C7_503C_41B1_6AA54500EBD4",
   "backwardYaw": 158.66,
   "distance": 1
  },
  {
   "yaw": 150.33,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5",
   "backwardYaw": -70.3,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6D416353_76F8_78A8_41DC_164AD7F7ACF4"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "OPD Mckean",
 "hfovMin": "135%",
 "id": "panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED",
 "overlays": [
  "this.overlay_635EFB29_76C8_A8F8_41C2_750863E04FA8",
  "this.overlay_636FA495_76C8_59AB_41CA_CD07F1157D16",
  "this.overlay_60D1D161_76CB_BB68_41CF_6A6DAC0D8FC2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -134.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB",
   "backwardYaw": 165.67,
   "distance": 1
  },
  {
   "yaw": -88.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5",
   "backwardYaw": 69.53,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6AFB4C2E_76C7_E8F9_417F_8B35F9E945CD"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "items": [
  {
   "media": "this.video_7DF11DF3_72C1_B00C_41C2_2BEB630AF2D3",
   "start": "this.viewer_uid7472030B_7B1C_4399_41B4_899E14DECA4FVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7472F30B_7B1C_4399_41D1_1801BB553356, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7472F30B_7B1C_4399_41D1_1801BB553356, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7472030B_7B1C_4399_41B4_899E14DECA4FVideoPlayer)",
   "player": "this.viewer_uid7472030B_7B1C_4399_41B4_899E14DECA4FVideoPlayer"
  }
 ],
 "id": "playList_7472F30B_7B1C_4399_41D1_1801BB553356",
 "class": "PlayList"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6AAE23B7_76C8_5FD7_41D1_598BDEE714A5",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_62E25E26_72C1_5014_41CC_E7DA4463DC85_1_t.jpg",
 "id": "album_62E25E26_72C1_5014_41CC_E7DA4463DC85_1",
 "width": 570,
 "label": "IMG_20221208_0004",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_62E25E26_72C1_5014_41CC_E7DA4463DC85_1.jpg"
   }
  ]
 },
 "height": 467
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "old Bethani Mckean",
 "hfovMin": "135%",
 "id": "panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5",
 "overlays": [
  "this.overlay_60B110F7_76C8_F968_41DC_430BEB08FBD9",
  "this.overlay_60418C6B_76C8_697F_41DC_1C0C6A139FB8",
  "this.overlay_60334CD4_76C8_69A9_4197_7434B75A50BF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 69.53,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED",
   "backwardYaw": -88.16,
   "distance": 1
  },
  {
   "yaw": -70.3,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F",
   "backwardYaw": 150.33,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6D120E40_76C7_A8A9_41A2_03E867A4B027"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -130.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_750ED478_7B1C_4587_41B0_D6686D8BA756",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_6B0AB027_7346_B014_41C6_A8F9704E7FFB",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_6B048027_7346_B014_41B8_D2E82E640475",
  "this.image_uid746BB314_7B1C_438F_41C2_5B7D6F6170A0_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window44281"
 },
 "titleFontFamily": "Arial"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_67D8F940_72C1_D00C_41DC_9949B29647DA",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_69C5E2E0_7A6F_BA10_41D3_6CE21FCD6C87_t.jpg",
 "id": "photo_69C5E2E0_7A6F_BA10_41D3_6CE21FCD6C87",
 "width": 1045,
 "label": "PC010-205",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_69C5E2E0_7A6F_BA10_41D3_6CE21FCD6C87.jpg"
   }
  ]
 },
 "height": 658
},
{
 "initialPosition": {
  "yaw": -14.5,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -0.54
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 94.88,
  "hfov": 111,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_74F75353_7B1C_4389_41C2_A062128E139F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6739E5AB_72C6_D01C_41D8_02BE994B2454_t.jpg",
 "id": "photo_6739E5AB_72C6_D01C_41D8_02BE994B2454",
 "width": 513,
 "label": "IMG_20221208_0003",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_6739E5AB_72C6_D01C_41D8_02BE994B2454.jpg"
   }
  ]
 },
 "height": 494
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_6C15BAB7_76F8_A9D7_41DD_184060C7482F",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_6C1B6AB7_76F8_A9D7_41D0_9F94CE47D9AC"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window52507"
 },
 "titleFontFamily": "Arial"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D_1_t.jpg",
 "id": "album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D_1",
 "width": 1500,
 "label": "PC010-122",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D_1.jpg"
   }
  ]
 },
 "height": 931
},
{
 "initialPosition": {
  "yaw": -100.78,
  "hfov": 111,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_76B5243A_7B1C_45FB_41DA_91E7A5F45CC9",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 81.85,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_7554E496_7B1C_4688_41D1_4B1922DFEE06",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_7479F309_7B1C_4386_41D4_5A853434A97B"
 ],
 "id": "playList_74458302_7B1C_438B_41BF_0B53054BCE2C",
 "change": "this.showComponentsWhileMouseOver(this.container_74791309_7B1C_4386_41AF_AB220420E51B, [this.htmltext_7479B30A_7B1C_439B_41DA_8C1C2B10FF3A,this.component_747FC30B_7B1C_439A_41CA_40F85708BF84,this.component_747FE30B_7B1C_439A_41DC_32E792A5CD87], 2000)"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_75BF8CE1_7A52_8E10_41D4_F68047814698_t.jpg",
 "id": "photo_75BF8CE1_7A52_8E10_41D4_F68047814698",
 "width": 1053,
 "label": "PC010-101",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_75BF8CE1_7A52_8E10_41D4_F68047814698.jpg"
   }
  ]
 },
 "height": 760
},
{
 "initialPosition": {
  "yaw": 179.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_6B23E37B_7B1C_4279_41B1_6616EDD9B3E7",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 12.49,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 17.89
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_747C430B_7B1C_4399_41D3_9F2BB06FAE32"
 ],
 "id": "playList_747C030B_7B1C_439A_41D8_FA6B86486A40",
 "change": "this.showComponentsWhileMouseOver(this.container_747DA30B_7B1C_4399_41DA_0ED148FB8221, [this.htmltext_747D130B_7B1C_4399_415F_C2DC39E97675,this.component_7472B30B_7B1C_4399_41D6_80B2D0DE7956,this.component_7472A30B_7B1C_4399_41D3_3DF722F2455D], 2000)"
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_63E60E9C_7363_AB30_41DA_FD566A62AC2A",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_744832FD_7B1C_4279_41C3_CC1C66040E77",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 82.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_751FB470_7B1C_4587_41C9_37A438DF495C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6AFD47EB_76C8_A778_41DC_C8FFA10D2D3F",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "items": [
  {
   "media": "this.video_7DF11DF3_72C1_B00C_41C2_2BEB630AF2D3",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_74920321_7B1C_4389_41B9_59CE2265E816, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_74920321_7B1C_4389_41B9_59CE2265E816, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_74920321_7B1C_4389_41B9_59CE2265E816",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -20.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_762B53D1_7B1C_4289_41AF_6A0952C13E48",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -124.39,
  "hfov": 111,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_76A0A442_7B1C_458B_41C7_A0D39D21C855",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_6F515056_7A71_F630_41C2_4DF484A896E3_1_t.jpg",
 "id": "album_6F515056_7A71_F630_41C2_4DF484A896E3_1",
 "width": 1492,
 "label": "\u0e28\u0e32\u0e25\u0e32\u0e22\u0e48\u0e32\u0e41\u0e2a\u0e07\u0e04\u0e33\u0e21\u0e32",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_6F515056_7A71_F630_41C2_4DF484A896E3_1.jpg"
   }
  ]
 },
 "height": 568
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6AB72FE9_76C9_A77B_41D3_954939C9A4CB",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6A9EEA83_76CB_E9AF_41D6_98090A6B2501",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "initialPosition": {
  "yaw": -29.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_75EB24FE_7B1C_467B_41CA_A38D46DF822A",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "media": "this.video_6E813F66_7A72_8A10_41D3_BC7EE7D9953D",
   "start": "this.viewer_uid7446F301_7B1C_4389_41D9_0707BA4EF8E0VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7441B301_7B1C_4389_41D1_8A7A5C40448E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7441B301_7B1C_4389_41D1_8A7A5C40448E, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7446F301_7B1C_4389_41D9_0707BA4EF8E0VideoPlayer)",
   "player": "this.viewer_uid7446F301_7B1C_4389_41D9_0707BA4EF8E0VideoPlayer"
  }
 ],
 "id": "playList_7441B301_7B1C_4389_41D1_8A7A5C40448E",
 "class": "PlayList"
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_6D938EE7_7342_B014_41BE_86FF9F965348",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_6D916EE7_7342_B014_41D2_8BD6F302138E",
  "this.image_uid746DC317_7B1C_4389_41D5_0CA4F529F667_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window73986"
 },
 "titleFontFamily": "Arial"
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_668E81E7_72C3_7014_41C0_8A2B38FA7DCF",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_668CD1E7_72C3_7014_41CD_5AE3FFC44C18",
  "this.image_uid7476B30D_7B1C_439E_41C2_CC3FFC286972_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window21197"
 },
 "titleFontFamily": "Arial"
},
{
 "thumbnailUrl": "media/video_7DF11DF3_72C1_B00C_41C2_2BEB630AF2D3_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1920,
 "label": "McCormick Hospital - Made with Clipchamp",
 "loop": false,
 "id": "video_7DF11DF3_72C1_B00C_41C2_2BEB630AF2D3",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_7DF11DF3_72C1_B00C_41C2_2BEB630AF2D3.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "id": "audio_60F7E6B6_76C9_D9E9_41BF_549CDE6671F1",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6AFE2BE8_76C8_EF79_41D9_33B2E5BEB0F7",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Ward C Mckean",
 "hfovMin": "135%",
 "id": "panorama_796B5FDC_72C7_5034_41D7_43EE36561E31",
 "overlays": [
  "this.overlay_66336966_76D8_6B69_41AD_F93341576583",
  "this.overlay_67DE371E_76D9_B8D8_41DB_F162D7A9CD22",
  "this.overlay_6719CB19_76DB_A8DB_41DC_EDF0C62E2CB1",
  "this.overlay_64C0F944_76D8_E8A9_41CE_092DF372DAEC",
  "this.overlay_64A4C95C_76D9_AB59_41CA_0E700E55CBAA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 99.49,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79699415_72C6_B034_41D9_C19923ABFD5E",
   "backwardYaw": -80.44,
   "distance": 1
  },
  {
   "yaw": 159.95,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7975D71A_72C7_703C_41D7_F92A481EDED9",
   "backwardYaw": -149.45,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB"
  },
  {
   "yaw": -49.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796B28E3_72C7_500C_41DA_450F54B79F10",
   "backwardYaw": 53.93,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6AFD47EB_76C8_A778_41DC_C8FFA10D2D3F"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "items": [
  {
   "media": "this.video_6E813F66_7A72_8A10_41D3_BC7EE7D9953D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7492B321_7B1C_4389_41D6_D3AF2BD3DDED, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7492B321_7B1C_4389_41D6_D3AF2BD3DDED, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_7492B321_7B1C_4389_41D6_D3AF2BD3DDED",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 10.51,
  "hfov": 88,
  "class": "PanoramaCameraPosition",
  "pitch": -0.44
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_79751ACF_72C6_B015_41BE_A57AE535C940_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Ward B Mckean",
 "hfovMin": "135%",
 "id": "panorama_796B28E3_72C7_500C_41DA_450F54B79F10",
 "overlays": [
  "this.overlay_6F41431B_7343_503C_41CB_C2E255CADEEF",
  "this.overlay_6F4179C8_7342_D01C_41D8_DC541B31BF8E",
  "this.overlay_6F776770_7341_B00C_4188_75E0D1D4D158",
  "this.overlay_6E98C199_7347_703C_41DB_F5866DF48E35",
  "this.overlay_6EBDF545_7346_D014_41DC_9A0537C1CB08",
  "this.overlay_6D2CE560_7341_700C_41C0_32C2E08D903E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 53.93,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796B5FDC_72C7_5034_41D7_43EE36561E31",
   "backwardYaw": -49.41,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79699415_72C6_B034_41D9_C19923ABFD5E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7975D71A_72C7_703C_41D7_F92A481EDED9"
  },
  {
   "yaw": -131.29,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB",
   "backwardYaw": -45.49,
   "distance": 1
  },
  {
   "yaw": -45.33,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79751ACF_72C6_B015_41BE_A57AE535C940",
   "backwardYaw": 58.63,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6AE6586C_76C8_A978_41D2_94D1BBC3DBC8"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "playList": "this.album_6F515056_7A71_F630_41C2_4DF484A896E3_AlbumPlayList",
 "thumbnailUrl": "media/album_6F515056_7A71_F630_41C2_4DF484A896E3_t.png",
 "id": "album_6F515056_7A71_F630_41C2_4DF484A896E3",
 "label": "Photo Album IMG_20221207_0022",
 "class": "PhotoAlbum"
},
{
 "items": [
  {
   "media": "this.album_6F515056_7A71_F630_41C2_4DF484A896E3",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_7492F321_7B1C_4389_41DA_A0BD7978DA7E",
 "class": "PlayList"
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_6B286D15_7A57_8E30_41D5_6E687055B10A",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_6B2A7D15_7A57_8E30_41D6_F7988EAE5287",
  "this.image_uid746D6317_7B1C_4389_41CC_B382F95F6FC0_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window12408"
 },
 "titleFontFamily": "Arial"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_740DED7A_7AD7_CC3F_41B7_28CCFBACD9F5",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_740DED7A_7AD7_CC3F_41B7_28CCFBACD9F5.ogg",
  "mp3Url": "media/audio_740DED7A_7AD7_CC3F_41B7_28CCFBACD9F5.mp3"
 },
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_62C860A9_7362_D710_41D7_EB75882EF1BE",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1419,
 "label": "NewIcogram 2022-12-18 19_49",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_62C860A9_7362_D710_41D7_EB75882EF1BE.png",
    "width": 1419,
    "class": "ImageResourceLevel",
    "height": 662
   },
   {
    "url": "media/map_62C860A9_7362_D710_41D7_EB75882EF1BE_lq.png",
    "width": 374,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 175
   }
  ]
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_6249A372_7362_59F0_41C7_48EBE2E37FA0"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_62C860A9_7362_D710_41D7_EB75882EF1BE_t.png",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "height": 662
},
{
 "initialPosition": {
  "yaw": -36.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_75BF34C3_7B1C_4689_4196_C2D3C19EEEDE",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -87.78,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_76F0C461_7B1C_4589_41BD_B45D02717943",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6D1CD694_76F8_59A8_41CB_7D3AE15216CC",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "initialPosition": {
  "yaw": -21.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_764B23F2_7B1C_428B_41DA_5DD8BE513F5F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Ward A Mckean",
 "hfovMin": "135%",
 "id": "panorama_79751ACF_72C6_B015_41BE_A57AE535C940",
 "overlays": [
  "this.overlay_69AF8934_7342_F074_41DA_B9539C16E13F",
  "this.overlay_69D70544_7343_5014_41D5_54B74BAEAB0B",
  "this.overlay_69D57401_7342_D00C_41A0_A79E780AE726",
  "this.overlay_68131B47_734F_5014_41B3_F5D743D442D2",
  "this.overlay_6F716A0C_7341_F014_41CD_10C7B046A7C2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 58.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796B28E3_72C7_500C_41DA_450F54B79F10",
   "backwardYaw": -45.33,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36"
  },
  {
   "yaw": 126.73,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB",
   "backwardYaw": -98.15,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6AEEE930_76C8_E8E9_41B7_A0BCB3029D1A"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 6.59,
  "class": "PanoramaCameraPosition",
  "pitch": -1.67
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_7E814EAC_72C2_D014_41C2_B18388E38053_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6ABCA0AC_76C8_79F9_41CA_E705B9C53629",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "buttonZoomOut": "this.IconButton_7F5EA6B2_6E0A_6707_41D0_91167AE781C9",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer",
 "buttonZoomIn": "this.IconButton_7ED39AF9_6E0A_2F05_41D2_51CF3D16E611",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": "this.IconButton_7F59CDFE_6E0A_24FE_41C0_F78ADADBB607",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_7966812F_72C6_D014_41D7_1D6924624506_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 175.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_765D83E9_7B1C_4299_41AD_5AA63B2E5469",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_796B28E3_72C7_500C_41DA_450F54B79F10_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_62E25E26_72C1_5014_41CC_E7DA4463DC85_0_t.jpg",
 "id": "album_62E25E26_72C1_5014_41CC_E7DA4463DC85_0",
 "width": 513,
 "label": "IMG_20221208_0003",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_62E25E26_72C1_5014_41CC_E7DA4463DC85_0.jpg"
   }
  ]
 },
 "height": 494
},
{
 "initialPosition": {
  "yaw": 45.69,
  "hfov": 86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_75AE64CB_7B1C_4699_41BA_5B6BC76DF974",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_62B90146_7365_B910_41C4_ED6B653F29A2",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_749DF321_7B1C_4389_41CE_8856EED2E17E",
 "class": "PlayList"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_793ED6F1_76CB_D968_41CB_FA70D4F589C9",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6379F848_72CF_701C_4165_85AD14E5CB7C",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "initialPosition": {
  "yaw": 33.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_7695E423_7B1C_4589_41A1_5AD6ADBD3AF9",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "id": "audio_604F8756_76C9_F8A8_41B2_F678C2595C62",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "items": [
  {
   "media": "this.panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_camera"
  },
  {
   "media": "this.panorama_7A8E615F_76C9_BB57_41DD_685C1043C329",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_camera"
  },
  {
   "media": "this.panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_camera"
  },
  {
   "media": "this.panorama_79FC54BD_72C3_7075_41D6_E4987603A213",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79FC54BD_72C3_7075_41D6_E4987603A213_camera"
  },
  {
   "media": "this.panorama_79898CE5_72C2_F014_41C2_54869D6C0D79",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_camera"
  },
  {
   "media": "this.panorama_7994979A_72C3_503C_41D0_F04DB3A891F6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_camera"
  },
  {
   "media": "this.panorama_799A3E71_72C3_500C_41D3_5123086D3056",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_799A3E71_72C3_500C_41D3_5123086D3056_camera"
  },
  {
   "media": "this.panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_camera"
  },
  {
   "media": "this.panorama_7E814EAC_72C2_D014_41C2_B18388E38053",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7E814EAC_72C2_D014_41C2_B18388E38053_camera"
  },
  {
   "media": "this.panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_camera"
  },
  {
   "media": "this.panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_camera"
  },
  {
   "media": "this.panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_camera"
  },
  {
   "media": "this.panorama_797491E6_72C7_5014_41CD_4848301827B2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_797491E6_72C7_5014_41CD_4848301827B2_camera"
  },
  {
   "media": "this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_camera"
  },
  {
   "media": "this.panorama_79751ACF_72C6_B015_41BE_A57AE535C940",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79751ACF_72C6_B015_41BE_A57AE535C940_camera"
  },
  {
   "media": "this.panorama_796B28E3_72C7_500C_41DA_450F54B79F10",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_796B28E3_72C7_500C_41DA_450F54B79F10_camera"
  },
  {
   "media": "this.panorama_796B5FDC_72C7_5034_41D7_43EE36561E31",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_camera"
  },
  {
   "media": "this.panorama_79699415_72C6_B034_41D9_C19923ABFD5E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79699415_72C6_B034_41D9_C19923ABFD5E_camera"
  },
  {
   "media": "this.panorama_7975D71A_72C7_703C_41D7_F92A481EDED9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_camera"
  },
  {
   "media": "this.panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_camera"
  },
  {
   "media": "this.panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_camera"
  },
  {
   "media": "this.panorama_79681767_72C1_5014_41CD_0B8A95017A68",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79681767_72C1_5014_41CD_0B8A95017A68_camera"
  },
  {
   "media": "this.panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_camera"
  },
  {
   "media": "this.panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_camera"
  },
  {
   "media": "this.panorama_797C3658_72C7_503C_41B1_6AA54500EBD4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_camera"
  },
  {
   "media": "this.panorama_7968FE87_72C7_7015_41D4_460518DF9780",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7968FE87_72C7_7015_41D4_460518DF9780_camera"
  },
  {
   "media": "this.panorama_7966812F_72C6_D014_41D7_1D6924624506",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7966812F_72C6_D014_41D7_1D6924624506_camera"
  },
  {
   "media": "this.panorama_7971D831_72C6_D00D_41C4_E89BC00D9197",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6A1448ED_7A56_9610_41D3_D2B2CC45FBB4_t.jpg",
 "id": "photo_6A1448ED_7A56_9610_41D3_D2B2CC45FBB4",
 "width": 1443,
 "label": "PC010-135",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_6A1448ED_7A56_9610_41D3_D2B2CC45FBB4.jpg"
   }
  ]
 },
 "height": 1063
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_62350E41_76D9_A8AB_41C1_DA8B7EC0BF69",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_62372E41_76D9_A8AB_41CD_94FDC0136E38"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window21649"
 },
 "titleFontFamily": "Arial"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_66775737_72C1_5074_41A8_1CA36B6CD3D8_t.jpg",
 "id": "photo_66775737_72C1_5074_41A8_1CA36B6CD3D8",
 "width": 311,
 "label": "ab-9",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_66775737_72C1_5074_41A8_1CA36B6CD3D8.jpg"
   }
  ]
 },
 "height": 206
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_617C81AF_76C8_7BF7_41D3_A11D8D710A31",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_617A41AF_76C8_7BF7_41A3_B34704B4CF79",
  "this.image_uid749A431E_7B1C_43BB_41B9_75DB87CF3785_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window41068"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 111,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -62.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_7680142A_7B1C_459B_41D3_4113B32041B4",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 11.35,
  "hfov": 81,
  "class": "PanoramaCameraPosition",
  "pitch": 0.37
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_79FC54BD_72C3_7075_41D6_E4987603A213_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e15\u0e36\u0e01 AB",
 "hfovMin": "135%",
 "id": "panorama_79898CE5_72C2_F014_41C2_54869D6C0D79",
 "overlays": [
  "this.overlay_61482069_72CF_701C_41AD_AD5BD9ED4021",
  "this.overlay_66F1DB80_72C2_D00C_41D1_7635BB9E302C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 162.3,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79FC54BD_72C3_7075_41D6_E4987603A213",
   "backwardYaw": 119.92,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_67D8F940_72C1_D00C_41DC_9949B29647DA"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "id": "audio_60942866_76C9_A969_41D6_E27E9FDCEDFC",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_64FCC360_72C1_F00C_41D3_C5C154B42654",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_64FE9360_72C1_F00C_41D6_C7275F6C382D",
  "this.image_uid7474D312_7B1C_438B_41D8_45C657686CCD_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window32497"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_62C860A9_7362_D710_41D7_EB75882EF1BE",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_749D0321_7B1C_4389_41CF_FC66B62148E1",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 61.42,
  "hfov": 82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_758D54BB_7B1C_46F9_41A2_0A68DEBBB454",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 23.45,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_769F641C_7B1C_45BF_41C1_F1E278143121",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e1a\u0e49\u0e32\u0e19\u0e44\u0e21\u0e49 Mckean",
 "hfovMin": "135%",
 "id": "panorama_7968FE87_72C7_7015_41D4_460518DF9780",
 "overlays": [
  "this.overlay_6FDB9DC6_76F8_ABA8_41CF_BCD01D2A7FD2",
  "this.overlay_6FA6753B_76FB_F8DF_41DA_F4E0C186BE4F",
  "this.overlay_6F74C94B_76F8_A8BF_41BD_9E63EFFDC8FC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 145.79,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797C3658_72C7_503C_41B1_6AA54500EBD4",
   "backwardYaw": -0.23,
   "distance": 1
  },
  {
   "yaw": -27.01,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7966812F_72C6_D014_41D7_1D6924624506",
   "backwardYaw": -115.69,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6D13ED43_76F9_A8AF_41D2_5CF752945D90"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -1.16,
  "class": "PanoramaCameraPosition",
  "pitch": 8
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_637BF6AC_72C1_F014_41D4_A9D3A311EBAE_t.jpg",
 "id": "photo_637BF6AC_72C1_F014_41D4_A9D3A311EBAE",
 "width": 255,
 "label": "ab-11",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_637BF6AC_72C1_F014_41D4_A9D3A311EBAE.jpg"
   }
  ]
 },
 "height": 169
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_6AA6E797_76F8_A7A8_41D0_5D2F49427EB8",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_6AA41797_76F8_A7A8_41D8_4708BB0E34F4"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window59920"
 },
 "titleFontFamily": "Arial"
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_63BD8B11_76D9_A8AB_41D6_1FD1273ECEB2",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_63BA4B15_76D9_A8AB_41D0_9CC8891FA580",
  "this.image_uid7461331C_7B1C_43BF_41D8_C77685F4CAD3_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window26471"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_7968FE87_72C7_7015_41D4_460518DF9780_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_6AD4B02A_7A51_B610_41C3_FD71EC410DED",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_6AD4902A_7A51_B610_41D0_B9B2D100CE64",
  "this.image_uid7469A315_7B1C_4389_41DB_04C27069D414_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window9785"
 },
 "titleFontFamily": "Arial"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D_0_t.jpg",
 "id": "album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D_0",
 "width": 1130,
 "label": "PC010-107",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D_0.jpg"
   }
  ]
 },
 "height": 749
},
{
 "initialPosition": {
  "yaw": 64.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_6B5D3383_7B1C_4289_41D4_9890F450BB74",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "media": "this.album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_749D6321_7B1C_4389_41C5_DDDFBED57570",
 "class": "PlayList"
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_6FB0793F_7341_5074_41D2_73422C1593FD",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_6FB2B93F_7341_5074_41C4_F6B70432FA87",
  "this.image_uid746FA316_7B1C_438B_41B8_8B806037A5CC_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window65199"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -121.37,
  "hfov": 88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_6B6CC39B_7B1C_42B9_41DC_2D00F07971AA",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 71.41,
  "hfov": 81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_6B01B36B_7B1C_4399_41BB_E1FAA9AA989B",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e15\u0e36\u0e01\u0e2d\u0e19\u0e38\u0e2a\u0e32\u0e23\u0e2a\u0e38\u0e19\u0e17\u0e23\u0e13\u0e4c",
 "hfovMin": "130%",
 "id": "panorama_79FC54BD_72C3_7075_41D6_E4987603A213",
 "overlays": [
  "this.overlay_632DDA2B_72C3_D01C_41D0_38D3A6B552F1",
  "this.overlay_60FD6596_72C1_F034_41D3_298DF997DF3F",
  "this.overlay_60642B08_72C2_B01C_41C5_94EE7110B1AC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -108.59,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7994979A_72C3_503C_41D0_F04DB3A891F6",
   "backwardYaw": 55.61,
   "distance": 1
  },
  {
   "yaw": 119.92,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79898CE5_72C2_F014_41C2_54869D6C0D79",
   "backwardYaw": 162.3,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6A9EEA83_76CB_E9AF_41D6_98090A6B2501"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 157.53,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_752BF488_7B1C_4687_41D3_F1B52A452919",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6E4E7430_7A6E_9E0F_41D7_A63122331734_t.jpg",
 "id": "photo_6E4E7430_7A6E_9E0F_41D7_A63122331734",
 "width": 1056,
 "label": "PC010-152",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_6E4E7430_7A6E_9E0F_41D7_A63122331734.jpg"
   }
  ]
 },
 "height": 776
},
{
 "playList": "this.album_62E25E26_72C1_5014_41CC_E7DA4463DC85_AlbumPlayList",
 "thumbnailUrl": "media/album_62E25E26_72C1_5014_41CC_E7DA4463DC85_t.png",
 "id": "album_62E25E26_72C1_5014_41CC_E7DA4463DC85",
 "label": "Photo Album IMG_20221208_0003",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": -17.7,
  "hfov": 111,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_76DCA449_7B1C_4599_41D4_31E7D5981357",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -53.27,
  "hfov": 88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_75D994D2_7B1C_468B_41CF_3DFD662809B9",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_6081A5A3_72C2_B00C_41D4_C6BB74D76898",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_608755A3_72C2_B00C_41D0_7A4687C5967A",
  "this.image_uid7473D30D_7B1C_439E_4184_903B011DA6A5_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window11755"
 },
 "titleFontFamily": "Arial"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6AE6586C_76C8_A978_41D2_94D1BBC3DBC8",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "initialPosition": {
  "yaw": -3.96,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 1.24
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "media": "this.album_62E25E26_72C1_5014_41CC_E7DA4463DC85",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_749DD321_7B1C_4389_41B3_4634D1C88087",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -80.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_76EC6469_7B1C_4599_41BB_3FBA1723D895",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 96.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_74E7B35B_7B1C_43B9_4183_DB1DBAE0A194",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 99.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_7546A49E_7B1C_46BB_41D6_C2B5CB15E245",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6A8E4755_76C8_B8AB_41B8_DB6EE547BB41",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "selectedBackgroundColor": "#202020",
 "children": [
  {
   "label": "ป้ายสถานีกาชาดที่ 3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "สถานีกาชาดที่ 3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "โรงพยาบาลแมคคอร์มิค",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "ตึกอนุสารสุนทรณ์",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "ตึก AB",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "ตึก ณ เชียงใหม่",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "ตึกมหิดลใหม่",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "ตึก F",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "Cort hall",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "ทางเข้าโรงพยาบาลแมคเคน",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "พิพิธภัณฑ์ภาพถ่ายโรงพยาบาลแมคเคน",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "label": "Memmorial Mckean",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "label": "Ward and Water pumg Mckean",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "label": "Mckean water pumb",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "label": "Ward A Mckean",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "label": "Ward B Mckean",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "label": "Ward C Mckean",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "label": "Hays Old Admistration",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "label": "Ward F Mckean",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  },
  {
   "label": "New Santithum Church",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  },
  {
   "label": "OPD Mckean",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  },
  {
   "label": "Back OPD Mckean",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  },
  {
   "label": "old Bethani Mckean",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  },
  {
   "label": "หมู่บ้านสานฝัน บ้านปูน",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  },
  {
   "label": "หมู่บ้านร่วมใจ บ้านปูน Mckean.tiff",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  },
  {
   "label": "บ้านไม้ Mckean",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  },
  {
   "label": "James Hugh McKean Chapel",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  },
  {
   "label": "Left Men ward (Bethleham) Right Women Ward (Bethany)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "label": "Media",
 "id": "Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "class": "Menu",
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "opacity": 0.4,
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "class": "PlayList",
 "items": [
  "this.albumitem_7466431C_7B1C_43BF_41BE_EE02EAD22F63"
 ],
 "id": "playList_7466C31C_7B1C_43BF_41CE_A50DD2D15C39",
 "change": "this.showComponentsWhileMouseOver(this.container_7467931C_7B1C_43BF_41DC_6A7537744A7C, [this.htmltext_7467C31D_7B1C_43B9_41BF_8AC38A318248,this.component_7464931D_7B1C_43B9_41C7_C481858445A9,this.component_7464831D_7B1C_43B9_41CF_4E31198BA3B2], 2000)"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e15\u0e36\u0e01 \u0e13 \u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48",
 "hfovMin": "135%",
 "id": "panorama_7994979A_72C3_503C_41D0_F04DB3A891F6",
 "overlays": [
  "this.overlay_668040DB_72C1_503D_41C2_0B92E93C3C69",
  "this.overlay_66031AA4_72C7_5014_4173_70D0E5630F82",
  "this.overlay_67F08ADC_72C1_D034_41D1_B7ABF9554FA6",
  "this.overlay_6785DFA5_72C2_D014_41B3_9C1AC3DF0B64"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 79.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_799A3E71_72C3_500C_41D3_5123086D3056",
   "backwardYaw": -81.81,
   "distance": 1
  },
  {
   "yaw": 55.61,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79FC54BD_72C3_7075_41D6_E4987603A213",
   "backwardYaw": -108.59,
   "distance": 1
  },
  {
   "yaw": -85.12,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3",
   "backwardYaw": -12.51,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6A8E4755_76C8_B8AB_41B8_DB6EE547BB41"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_66A330F0_76C9_D969_41B5_EE624B8094A7",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_66A140F0_76C9_D969_41D4_4310C669C04F",
  "this.viewer_uid7446F301_7B1C_4389_41D9_0707BA4EF8E0",
  "this.container_74791309_7B1C_4386_41AF_AB220420E51B"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "close": "this.playList_7441B301_7B1C_4389_41D1_8A7A5C40448E.set('selectedIndex', -1);; this.playList_74458302_7B1C_438B_41BF_0B53054BCE2C.set('selectedIndex', -1);",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window8834"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_797491E6_72C7_5014_41CD_4848301827B2_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_66182641_72C1_B00C_41D1_10A5F0DCDDAA_t.jpg",
 "id": "photo_66182641_72C1_B00C_41D1_10A5F0DCDDAA",
 "width": 322,
 "label": "ab-8",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_66182641_72C1_B00C_41D1_10A5F0DCDDAA.jpg"
   }
  ]
 },
 "height": 259
},
{
 "playList": "this.album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D_AlbumPlayList",
 "thumbnailUrl": "media/album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D_t.png",
 "id": "album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D",
 "label": "Photo Album PC010-107",
 "class": "PhotoAlbum"
},
{
 "buttonZoomOut": "this.IconButton_7F5EA6B2_6E0A_6707_41D0_91167AE781C9",
 "class": "MapPlayer",
 "viewerArea": "this.MainViewer",
 "buttonZoomIn": "this.IconButton_7ED39AF9_6E0A_2F05_41D2_51CF3D16E611",
 "id": "MainViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e2b\u0e21\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19\u0e23\u0e48\u0e27\u0e21\u0e43\u0e08 \u0e1a\u0e49\u0e32\u0e19\u0e1b\u0e39\u0e19 Mckean.tiff",
 "hfovMin": "135%",
 "id": "panorama_797C3658_72C7_503C_41B1_6AA54500EBD4",
 "overlays": [
  "this.overlay_6E7E2203_76C8_D8AF_41D5_DA33BA24C4F8",
  "this.overlay_6E07DB32_76F8_E8E9_41D5_2A64F4F75641",
  "this.overlay_6E0ACA26_76F9_E8E9_41CB_24A54CB13E39"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -0.23,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7968FE87_72C7_7015_41D4_460518DF9780",
   "backwardYaw": 145.79,
   "distance": 1
  },
  {
   "yaw": 158.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F",
   "backwardYaw": -4.63,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6D1CD694_76F8_59A8_41CB_7D3AE15216CC"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6AAA7AEB_76C9_A97F_41BB_A01FE509B468",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e17\u0e32\u0e07\u0e40\u0e02\u0e49\u0e32\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e40\u0e04\u0e19",
 "hfovMin": "135%",
 "id": "panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89",
 "overlays": [
  "this.overlay_64336B9F_7341_7034_4174_637EA89A7F61",
  "this.overlay_646BFC7B_7343_50FC_41D8_F396C7F34213",
  "this.overlay_64DEDE0A_7346_B01C_41B7_C5E76194B057"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6AB72FE9_76C9_A77B_41D3_954939C9A4CB"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 48.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_75C9D4E3_7B1C_4689_41D9_FA5A2E5DBEF6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 130.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_6B4D338B_7B1C_4299_41DA_93753C430156",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_62B90146_7365_B910_41C4_ED6B653F29A2",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_74929321_7B1C_4389_41CA_08C445A7007E",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "James Hugh McKean Chapel",
 "hfovMin": "135%",
 "id": "panorama_7966812F_72C6_D014_41D7_1D6924624506",
 "overlays": [
  "this.overlay_6F4168A0_76F9_A9E8_41DD_1A4AA435B5B2",
  "this.overlay_6C8C21AE_76F8_7BF8_41B9_F4C885CE58D7",
  "this.overlay_6C4214EE_76F8_D979_41DA_1FAE24347DE5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -115.69,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7968FE87_72C7_7015_41D4_460518DF9780",
   "backwardYaw": -27.01,
   "distance": 1
  },
  {
   "yaw": 49.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7971D831_72C6_D00D_41C4_E89BC00D9197",
   "backwardYaw": -38.68,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6ABB2B2B_76F9_E8F8_41B2_B17C2C69FF0D"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6ABA6260_76C8_5969_41C2_DFBEE7514F04",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_6D5C3E91_76F8_69A8_41B5_C097B162656C",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_6D5AEE91_76F8_69A8_4190_DEDB6100AC4F"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window60454"
 },
 "titleFontFamily": "Arial"
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_65E9ECC2_7342_B00C_41CB_A897A0BADCDA",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_65F7ACC2_7342_B00C_41B0_F550C238E584",
  "this.image_uid74752313_7B1C_4389_41CA_AD9EBE7DF9E2_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window39001"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -56.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_762D53D9_7B1C_42B9_41DA_2CD275E13C71",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Hays Old Admistration",
 "hfovMin": "135%",
 "id": "panorama_79699415_72C6_B034_41D9_C19923ABFD5E",
 "overlays": [
  "this.overlay_6431F942_76D8_68A9_41C9_50E4AE29D641",
  "this.overlay_65944BAA_76D8_6FF8_41BC_94A27C8DE08B",
  "this.overlay_65AB43BA_76D8_BFD9_41C1_0C89D076621C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -80.44,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796B5FDC_72C7_5034_41D7_43EE36561E31",
   "backwardYaw": 99.49,
   "distance": 1
  },
  {
   "yaw": 123.71,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7975D71A_72C7_703C_41D7_F92A481EDED9",
   "backwardYaw": -97.24,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_60942866_76C9_A969_41D6_E27E9FDCEDFC"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6AF08C84_76C8_A9A9_4197_FD16824AAC4B",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_63E60E9C_7363_AB30_41DA_FD566A62AC2A",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1419,
 "label": "NewIcogram 2022-12-18 19_49",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_63E60E9C_7363_AB30_41DA_FD566A62AC2A.png",
    "width": 1419,
    "class": "ImageResourceLevel",
    "height": 662
   },
   {
    "url": "media/map_63E60E9C_7363_AB30_41DA_FD566A62AC2A_lq.png",
    "width": 374,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 175
   }
  ]
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_63EA5775_7366_59F0_41C0_9252936E984B"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_63E60E9C_7363_AB30_41DA_FD566A62AC2A_t.png",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "height": 662
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6D120E40_76C7_A8A9_41A2_03E867A4B027",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_6F515056_7A71_F630_41C2_4DF484A896E3_0_t.jpg",
 "id": "album_6F515056_7A71_F630_41C2_4DF484A896E3_0",
 "width": 580,
 "label": "IMG_20221207_0022",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_6F515056_7A71_F630_41C2_4DF484A896E3_0.jpg"
   }
  ]
 },
 "height": 378
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_6482F34D_72C1_B014_41D8_3B83CA44BDA5",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_6480B34D_72C1_B014_4146_E532DF5B480D"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window36836"
 },
 "titleFontFamily": "Arial"
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_636E41AD_72C1_7014_41D0_0E107010DCDD",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_636871AD_72C1_7014_41C8_CCEF38C19270",
  "this.container_747DA30B_7B1C_4399_41DA_0ED148FB8221",
  "this.viewer_uid7472030B_7B1C_4399_41B4_899E14DECA4F"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "close": "this.playList_747C030B_7B1C_439A_41D8_FA6B86486A40.set('selectedIndex', -1);; this.playList_7472F30B_7B1C_4399_41D1_1801BB553356.set('selectedIndex', -1);",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window9306"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 101.53,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_76BEF432_7B1C_458B_41DD_B25C5F79B00B",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04",
 "hfovMin": "135%",
 "id": "panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3",
 "overlays": [
  "this.overlay_6272E944_72C1_B014_41DB_23878A4062BC",
  "this.overlay_63BBFE95_72C1_7034_41C7_2CE053BDE650",
  "this.overlay_676B0CD4_72C1_5034_41A2_62AFFBC1458E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -12.51,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7994979A_72C3_503C_41D0_F04DB3A891F6",
   "backwardYaw": -85.12,
   "distance": 1
  },
  {
   "yaw": 117.65,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7E814EAC_72C2_D014_41C2_B18388E38053",
   "backwardYaw": -83.92,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6379F848_72CF_701C_4165_85AD14E5CB7C"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 152.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_76C80452_7B1C_458B_41C6_BC7791CC0DEA",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_62A65118_736E_7930_41D3_560526C343C2",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_7492C321_7B1C_4389_41D9_7F32EAF17E42",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "New Santithum Church",
 "hfovMin": "135%",
 "id": "panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36",
 "overlays": [
  "this.overlay_6333580C_76D9_A8B9_41C4_1335A823090C",
  "this.overlay_63F5CBC8_76D8_EFB9_41A5_C5427BCCFBA5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 143.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB",
   "backwardYaw": -171.99,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_604F8756_76C9_F8A8_41B2_F678C2595C62"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "thumbnailUrl": "media/video_6E813F66_7A72_8A10_41D3_BC7EE7D9953D_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1920,
 "label": "American Mission Hospital - Made with Clipchamp",
 "loop": false,
 "id": "video_6E813F66_7A72_8A10_41D3_BC7EE7D9953D",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_6E813F66_7A72_8A10_41D3_BC7EE7D9953D.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 109.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_7641A3FB_7B1C_427A_41D2_52E3866AC99D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_62B90146_7365_B910_41C4_ED6B653F29A2",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1419,
 "label": "NewIcogram 2022-12-18 19_49",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_62B90146_7365_B910_41C4_ED6B653F29A2.png",
    "width": 1419,
    "class": "ImageResourceLevel",
    "height": 662
   },
   {
    "url": "media/map_62B90146_7365_B910_41C4_ED6B653F29A2_lq.png",
    "width": 374,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 175
   }
  ]
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_63CB76FC_7362_58F0_41D5_8C83006A3D95"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_62B90146_7365_B910_41C4_ED6B653F29A2_t.png",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "height": 662
},
{
 "initialPosition": {
  "yaw": 134.51,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_6B7D3393_7B1C_4289_41DD_67E3234C21B7",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_637454FD_76C8_D958_41C6_C586DEB80C8B",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_637794FD_76C8_D958_41C6_556948B135BD"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window32051"
 },
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e15\u0e36\u0e01 F",
 "hfovMin": "135%",
 "id": "panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6",
 "overlays": [
  "this.overlay_64610F34_72C3_D074_41BD_D09693A6D53C",
  "this.overlay_6438B7DD_72C2_F034_41D3_0D5EF83BAB61"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -78.47,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_799A3E71_72C3_500C_41D3_5123086D3056",
   "backwardYaw": 78.61,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6ABCA0AC_76C8_79F9_41CA_E705B9C53629"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -126.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_756074AD_7B1C_4699_41DE_4BBE4B5C9B6C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_62E25E26_72C1_5014_41CC_E7DA4463DC85_2_t.jpg",
 "id": "album_62E25E26_72C1_5014_41CC_E7DA4463DC85_2",
 "width": 1036,
 "label": "PC014P-133",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_62E25E26_72C1_5014_41CC_E7DA4463DC85_2.jpg"
   }
  ]
 },
 "height": 656
},
{
 "initialPosition": {
  "yaw": -14.33,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_7675040C_7B1C_459F_4198_A1BEA5284A9F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_649ECF02_734E_B00C_4194_A7D7EAD69B95_t.jpg",
 "id": "photo_649ECF02_734E_B00C_4194_A7D7EAD69B95",
 "width": 1034,
 "label": "PC038P-182",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_649ECF02_734E_B00C_4194_A7D7EAD69B95.jpg"
   }
  ]
 },
 "height": 632
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Ward and Water pumg Mckean",
 "hfovMin": "135%",
 "id": "panorama_797491E6_72C7_5014_41CD_4848301827B2",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_6AF08C84_76C8_A9A9_4197_FD16824AAC4B"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_797491E6_72C7_5014_41CD_4848301827B2_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6A82546C_76C7_D979_41BE_CFF12E79FFBF",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e15\u0e36\u0e01\u0e21\u0e2b\u0e34\u0e14\u0e25\u0e43\u0e2b\u0e21\u0e48",
 "hfovMin": "135%",
 "id": "panorama_799A3E71_72C3_500C_41D3_5123086D3056",
 "overlays": [
  "this.overlay_674333E4_72CF_D014_41BF_5C1AD9EF1FAB",
  "this.overlay_67283E0D_72CE_D014_41C0_A6A882C2D2BA",
  "this.overlay_672A6EE3_72C1_500C_4198_95DF370F8E53"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 78.61,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6",
   "backwardYaw": -78.47,
   "distance": 1
  },
  {
   "yaw": -81.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7994979A_72C3_503C_41D0_F04DB3A891F6",
   "backwardYaw": 79.22,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6A8ED597_76C8_5BD7_41BB_54A94F0AEF56"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 134.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_7525A48F_7B1C_4699_41AA_F127B984A923",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6AEEE930_76C8_E8E9_41B7_A0BCB3029D1A",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "initialPosition": {
  "yaw": -110.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_7660F414_7B1C_458E_41DD_E7E20ECB2827",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -101.39,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_74C5334B_7B1C_4399_41CB_53EAE7B71D7D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 30.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_757114A5_7B1C_4689_41CE_9098C15AA473",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Back OPD Mckean",
 "hfovMin": "135%",
 "id": "panorama_79681767_72C1_5014_41CD_0B8A95017A68",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_6A82546C_76C7_D979_41BE_CFF12E79FFBF"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_79681767_72C1_5014_41CD_0B8A95017A68_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6D416353_76F8_78A8_41DC_164AD7F7ACF4",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "initialPosition": {
  "yaw": 98.19,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_6B111363_7B1C_4389_41CB_ECC7CF783B5C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6ABB2B2B_76F9_E8F8_41B2_B17C2C69FF0D",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e1e\u0e34\u0e1e\u0e34\u0e18\u0e20\u0e31\u0e13\u0e11\u0e4c\u0e20\u0e32\u0e1e\u0e16\u0e48\u0e32\u0e22\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e40\u0e04\u0e19",
 "hfovMin": "135%",
 "id": "panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF",
 "overlays": [
  "this.overlay_64FCCA92_7346_B00C_41A4_8CAF7A9C5FE7",
  "this.overlay_6B0C7139_7342_D07D_41C4_081860404FE0",
  "this.overlay_6B1A002E_7343_D014_41D9_651ADDFECAA0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -146.27,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E",
   "backwardYaw": 135.81,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6AAA7AEB_76C9_A97F_41BB_A01FE509B468"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_6F8FECA3_76F8_69EF_41CE_F44660F11C45",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_6F91CCA3_76F8_69EF_41D2_D9B4F4C0FEDA",
  "this.image_uid7499A31F_7B1C_43B9_41B8_E6AC30737566_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window48130"
 },
 "titleFontFamily": "Arial"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6D13ED43_76F9_A8AF_41D2_5CF752945D90",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_799A3E71_72C3_500C_41D3_5123086D3056_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6A322658_76F9_B959_41D1_AE6CE752267D",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "items": [
  {
   "media": "this.panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_camera"
  },
  {
   "media": "this.panorama_7A8E615F_76C9_BB57_41DD_685C1043C329",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_camera"
  },
  {
   "media": "this.panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_camera"
  },
  {
   "media": "this.panorama_79FC54BD_72C3_7075_41D6_E4987603A213",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79FC54BD_72C3_7075_41D6_E4987603A213_camera"
  },
  {
   "media": "this.panorama_79898CE5_72C2_F014_41C2_54869D6C0D79",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_camera"
  },
  {
   "media": "this.panorama_7994979A_72C3_503C_41D0_F04DB3A891F6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_camera"
  },
  {
   "media": "this.panorama_799A3E71_72C3_500C_41D3_5123086D3056",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_799A3E71_72C3_500C_41D3_5123086D3056_camera"
  },
  {
   "media": "this.panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_camera"
  },
  {
   "media": "this.panorama_7E814EAC_72C2_D014_41C2_B18388E38053",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7E814EAC_72C2_D014_41C2_B18388E38053_camera"
  },
  {
   "media": "this.panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_camera"
  },
  {
   "media": "this.panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_camera"
  },
  {
   "media": "this.panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_camera"
  },
  {
   "media": "this.panorama_797491E6_72C7_5014_41CD_4848301827B2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_797491E6_72C7_5014_41CD_4848301827B2_camera"
  },
  {
   "media": "this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_camera"
  },
  {
   "media": "this.panorama_79751ACF_72C6_B015_41BE_A57AE535C940",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79751ACF_72C6_B015_41BE_A57AE535C940_camera"
  },
  {
   "media": "this.panorama_796B28E3_72C7_500C_41DA_450F54B79F10",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_796B28E3_72C7_500C_41DA_450F54B79F10_camera"
  },
  {
   "media": "this.panorama_796B5FDC_72C7_5034_41D7_43EE36561E31",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_camera"
  },
  {
   "media": "this.panorama_79699415_72C6_B034_41D9_C19923ABFD5E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79699415_72C6_B034_41D9_C19923ABFD5E_camera"
  },
  {
   "media": "this.panorama_7975D71A_72C7_703C_41D7_F92A481EDED9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_camera"
  },
  {
   "media": "this.panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_camera"
  },
  {
   "media": "this.panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_camera"
  },
  {
   "media": "this.panorama_79681767_72C1_5014_41CD_0B8A95017A68",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79681767_72C1_5014_41CD_0B8A95017A68_camera"
  },
  {
   "media": "this.panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_camera"
  },
  {
   "media": "this.panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_camera"
  },
  {
   "media": "this.panorama_797C3658_72C7_503C_41B1_6AA54500EBD4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_camera"
  },
  {
   "media": "this.panorama_7968FE87_72C7_7015_41D4_460518DF9780",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7968FE87_72C7_7015_41D4_460518DF9780_camera"
  },
  {
   "media": "this.panorama_7966812F_72C6_D014_41D7_1D6924624506",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7966812F_72C6_D014_41D7_1D6924624506_camera"
  },
  {
   "media": "this.panorama_7971D831_72C6_D00D_41C4_E89BC00D9197",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 27, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_camera"
  }
 ],
 "id": "thumbnaillist5245_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 167.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_6B330374_7B1C_438F_41C4_3DA7F6F1AE50",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -34.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_762413E1_7B1C_4289_41D7_E55E22CA87CD",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6A8ED597_76C8_5BD7_41BB_54A94F0AEF56",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_66DACD34_76CB_E8E9_41D0_F6BC241C7342",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "initialPosition": {
  "yaw": 8.01,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_7538C480_7B1C_4687_41D7_A1FEF844E411",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -7.82,
  "hfov": 111,
  "class": "PanoramaCameraPosition",
  "pitch": -5.56
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Cort hall",
 "hfovMin": "135%",
 "id": "panorama_7E814EAC_72C2_D014_41C2_B18388E38053",
 "overlays": [
  "this.overlay_65C8873B_7341_F07C_4193_90CDF733916C",
  "this.overlay_640BB3E9_7343_501C_41B3_39C52F312B54",
  "this.overlay_64180C4C_734F_D014_41DC_0A8238F77103",
  "this.overlay_6E1FCB52_7A77_8A30_41D1_BA415F8AF9E8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -83.92,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3",
   "backwardYaw": 117.65,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6ABA6260_76C8_5969_41C2_DFBEE7514F04"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Ward F Mckean",
 "hfovMin": "135%",
 "id": "panorama_7975D71A_72C7_703C_41D7_F92A481EDED9",
 "overlays": [
  "this.overlay_6290C103_76D8_78A8_4199_72479520F1D2",
  "this.overlay_62A5E0ED_76D8_797B_41D3_011AFA7FDE92",
  "this.overlay_62649814_76D8_68A9_41D5_C76D444FCFA1",
  "this.overlay_63DAFB86_76D8_AFA9_41D7_ABB0C514BC15"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -149.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796B5FDC_72C7_5034_41D7_43EE36561E31",
   "backwardYaw": 159.95,
   "distance": 1
  },
  {
   "yaw": -97.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79699415_72C6_B034_41D9_C19923ABFD5E",
   "backwardYaw": 123.71,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_60F7E6B6_76C9_D9E9_41BF_549CDE6671F1"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_75904AB7_7A53_8A70_41DE_26FDF29784B2_t.jpg",
 "id": "photo_75904AB7_7A53_8A70_41DE_26FDF29784B2",
 "width": 1302,
 "label": "IMG_20221208_0001",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_75904AB7_7A53_8A70_41DE_26FDF29784B2.jpg"
   }
  ]
 },
 "height": 910
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_6AFB4C2E_76C7_E8F9_417F_8B35F9E945CD",
 "audio": "this.audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1",
 "data": {
  "label": "light-epic-adventure-110060"
 }
},
{
 "initialPosition": {
  "yaw": -60.08,
  "hfov": 81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_759234B4_7B1C_468F_41D8_1DA8B0AEFF48",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -44.19,
  "hfov": 82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_767CB404_7B1C_458F_41D5_55DF87EED503",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_63CFA829_76C7_A8FB_41C6_31F99A879F9E",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingRight": 10,
 "title": "",
 "titleFontWeight": "normal",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_63CE1829_76C7_A8FB_41DC_AF16458F6E65",
  "this.container_7467931C_7B1C_43BF_41DC_6A7537744A7C"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "close": "this.playList_7466C31C_7B1C_43BF_41CE_A50DD2D15C39.set('selectedIndex', -1);",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window28898"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 91.84,
  "hfov": 86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_75F9D4F1_7B1C_4689_41B9_A6760554E79C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6EBB1E66_7A71_8A10_417E_561685A16EEA_t.jpg",
 "id": "photo_6EBB1E66_7A71_8A10_417E_561685A16EEA",
 "width": 1047,
 "label": "PC010-185",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_6EBB1E66_7A71_8A10_417E_561685A16EEA.jpg"
   }
  ]
 },
 "height": 702
},
{
 "initialPosition": {
  "yaw": 141.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_76C66458_7B1C_4587_41D3_BC35E4ACE5E9",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_62A65118_736E_7930_41D3_560526C343C2",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1419,
 "label": "NewIcogram 2022-12-18 19_49",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_62A65118_736E_7930_41D3_560526C343C2.png",
    "width": 1419,
    "class": "ImageResourceLevel",
    "height": 662
   },
   {
    "url": "media/map_62A65118_736E_7930_41D3_560526C343C2_lq.png",
    "width": 374,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 175
   }
  ]
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_6202C506_736E_F910_41C5_49B814B8CC48"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_62A65118_736E_7930_41D3_560526C343C2_t.png",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "height": 662
},
{
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "id": "window_660196A1_72C1_700C_41D6_AFC41D89A0A2",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "overflow": "scroll",
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "titlePaddingTop": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "class": "Window",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "headerBorderColor": "#000000",
 "height": 600,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "headerPaddingRight": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_661FC6A1_72C1_700C_41BE_0A44B5DCFF5E",
  "this.image_uid7476230E_7B1C_439B_41DD_828EA7B2CF15_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "headerPaddingBottom": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "layout": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center",
 "data": {
  "name": "Window22906"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Left Men ward (Bethleham) Right Women Ward (Bethany)",
 "hfovMin": "135%",
 "id": "panorama_7971D831_72C6_D00D_41C4_E89BC00D9197",
 "overlays": [
  "this.overlay_6DEB85EA_76F9_FB79_41D5_FD0AA3A92DFB",
  "this.overlay_6DE3971E_76F8_58D9_41D2_74568C9E1EB6",
  "this.overlay_6DB55E88_76F8_A9B9_418B_D10BA3757804",
  "this.overlay_6DFF8711_76FB_F8AB_41D4_A2D89ACCE3C5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89"
  },
  {
   "yaw": -38.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7966812F_72C6_D014_41D7_1D6924624506",
   "backwardYaw": 49.39,
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_6A322658_76F9_B959_41D1_AE6CE752267D"
 ],
 "cardboardMenu": "this.Menu_74B4332F_7B1C_4399_41CF_E34BE9295597",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "pitch": 0
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "right": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "paddingLeft": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "minHeight": 50,
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "transitionDuration": 500,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressLeft": 10,
 "minWidth": 100,
 "playbackBarBorderSize": 2,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "vrPointerSelectionTime": 3100,
 "progressRight": 10,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 1,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 2,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 4,
 "playbackBarBorderColor": "#AAAAAA",
 "top": 77,
 "playbackBarLeft": 0,
 "bottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarBottom": 10,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#AAAAAA",
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 20,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "itemLabelFontFamily": "Arial",
 "maxWidth": 800,
 "id": "thumbnaillist5245",
 "left": 0,
 "width": 189,
 "itemBorderRadius": 0,
 "itemVerticalAlign": "middle",
 "backgroundOpacity": 0.2,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "paddingLeft": 20,
 "itemPaddingLeft": 3,
 "scrollBarWidth": 10,
 "itemThumbnailShadowSpread": 1,
 "minHeight": 0,
 "class": "ThumbnailList",
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.thumbnaillist5245_playlist",
 "itemOpacity": 1,
 "minWidth": 0,
 "itemBackgroundColor": [],
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "itemThumbnailOpacity": 1,
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "itemThumbnailShadowOpacity": 0.8,
 "itemThumbnailShadowVerticalLength": 3,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "scrollBarColor": "#FFFFFF",
 "itemLabelFontWeight": "normal",
 "scrollBarOpacity": 0.5,
 "maxHeight": 800,
 "scrollBarVisible": "rollOver",
 "itemThumbnailHeight": 75,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "paddingRight": 20,
 "itemThumbnailShadow": true,
 "itemThumbnailShadowBlurRadius": 4,
 "borderRadius": 5,
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemLabelGap": 5,
 "top": 76.75,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "bottom": "0%",
 "itemThumbnailWidth": 100,
 "gap": 10,
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemThumbnailShadowColor": "#000000",
 "itemHorizontalAlign": "center",
 "selectedItemLabelFontWeight": "bold",
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "layout": "vertical",
 "data": {
  "name": "ThumbnailList28173"
 },
 "itemLabelPosition": "bottom",
 "horizontalAlign": "left",
 "itemThumbnailBorderRadius": 5
},
{
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "label4056",
 "left": 9,
 "width": 292,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 16,
 "text": "Virtual Tour",
 "class": "Label",
 "top": 14,
 "propagateClick": false,
 "height": 49,
 "minWidth": 30,
 "fontSize": 40,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Label28174"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#666666"
},
{
 "horizontalAlign": "center",
 "maxHeight": 96,
 "maxWidth": 96,
 "id": "IconButton_7EAAF8EF_6E16_EB1D_41D4_605DB1125570",
 "width": 32,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "right": "13.62%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "propagateClick": false,
 "bottom": "4.86%",
 "height": 32,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setMediaBehaviour(this.playList_744832FD_7B1C_4279_41C3_CC1C66040E77, 0)",
 "iconURL": "skin/IconButton_7EAAF8EF_6E16_EB1D_41D4_605DB1125570.png",
 "shadow": false,
 "data": {
  "name": "IconButton12180"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 96,
 "maxWidth": 96,
 "id": "IconButton_7C5A1D01_6E16_2505_4181_C912A287EFE5",
 "width": 32,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "right": "9.43%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "propagateClick": false,
 "bottom": "4.86%",
 "height": 32,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7C5A1D01_6E16_2505_4181_C912A287EFE5.png",
 "shadow": false,
 "data": {
  "name": "IconButton12708"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 96,
 "maxWidth": 96,
 "id": "IconButton_7C7D1240_6E0A_3F02_41C3_6509F657D584",
 "width": 32,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "right": "5.41%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "propagateClick": false,
 "bottom": "4.86%",
 "height": 32,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7C7D1240_6E0A_3F02_41C3_6509F657D584.png",
 "shadow": false,
 "data": {
  "name": "IconButton13263"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 96,
 "maxWidth": 96,
 "id": "IconButton_7F59CDFE_6E0A_24FE_41C0_F78ADADBB607",
 "width": 32,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "right": "1.48%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "propagateClick": false,
 "bottom": "4.86%",
 "height": 32,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7F59CDFE_6E0A_24FE_41C0_F78ADADBB607.png",
 "shadow": false,
 "data": {
  "name": "IconButton13923"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_7ED39AF9_6E0A_2F05_41D2_51CF3D16E611",
 "width": 32,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7ED39AF9_6E0A_2F05_41D2_51CF3D16E611_rollover.png",
 "paddingRight": 0,
 "right": "1.48%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "IconButton",
 "propagateClick": false,
 "bottom": "12.01%",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7ED39AF9_6E0A_2F05_41D2_51CF3D16E611.png",
 "shadow": false,
 "data": {
  "name": "Button27673"
 },
 "pressedIconURL": "skin/IconButton_7ED39AF9_6E0A_2F05_41D2_51CF3D16E611_pressed.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_7F5EA6B2_6E0A_6707_41D0_91167AE781C9",
 "width": 32,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7F5EA6B2_6E0A_6707_41D0_91167AE781C9_rollover.png",
 "paddingRight": 0,
 "right": "1.48%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "class": "IconButton",
 "propagateClick": false,
 "bottom": "19.46%",
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7F5EA6B2_6E0A_6707_41D0_91167AE781C9.png",
 "shadow": false,
 "data": {
  "name": "Button27662"
 },
 "pressedIconURL": "skin/IconButton_7F5EA6B2_6E0A_6707_41D0_91167AE781C9_pressed.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 96,
 "maxWidth": 96,
 "id": "IconButton_7C68BF6B_6E0E_2505_41D8_F15015721E54",
 "left": "0.03%",
 "width": 43,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "class": "IconButton",
 "top": "11.6%",
 "propagateClick": false,
 "height": 45,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "if(!this.thumbnaillist5245.get('visible')){ this.setComponentVisibility(this.thumbnaillist5245, true, 0, null, null, false) } else { this.setComponentVisibility(this.thumbnaillist5245, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_7C68BF6B_6E0E_2505_41D8_F15015721E54.png",
 "shadow": false,
 "data": {
  "name": "IconButton16481"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.51,
   "yaw": -98.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_79751ACF_72C6_B015_41BE_A57AE535C940, this.camera_75D994D2_7B1C_468B_41CF_3DFD662809B9); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_5635576F_7343_5014_41CC_4CEB114B7F49",
   "pitch": 0.27,
   "hfov": 24.51,
   "yaw": -98.15
  }
 ],
 "id": "overlay_6A223D99_7343_F03C_41D9_A96D70E4E104",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.57,
   "yaw": -171.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36, this.camera_75BF34C3_7B1C_4689_4196_C2D3C19EEEDE); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_5635F76F_7343_5014_4193_FCD3A3F59CEE",
   "pitch": 4.81,
   "hfov": 13.57,
   "yaw": -171.99
  }
 ],
 "id": "overlay_6A76C676_7341_70F4_41D4_C74274D71C8D",
 "data": {
  "label": "Circle Arrow 02 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.51,
   "yaw": -45.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_796B28E3_72C7_500C_41DA_450F54B79F10, this.camera_75C9D4E3_7B1C_4689_41D9_FA5A2E5DBEF6); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_5635976F_7343_5014_41D1_F9E7622E3569",
   "pitch": -0.34,
   "hfov": 24.51,
   "yaw": -45.49
  }
 ],
 "id": "overlay_6A5DA5E8_7341_D01C_41CA_D5FB191E7D1F",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.54,
   "yaw": -156.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E, this.camera_758D54BB_7B1C_46F9_41A2_0A68DEBBB454); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_563A476F_7343_5014_41C0_BA012B708345",
   "pitch": 6.02,
   "hfov": 13.54,
   "yaw": -156.55
  }
 ],
 "id": "overlay_6A7C0626_7346_D014_4183_6919A2A2B250",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.57,
   "yaw": 4.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 22.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_6AD4B02A_7A51_B610_41C3_FD71EC410DED, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_1_HS_4_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 22.68,
   "yaw": 4.15,
   "distance": 50
  }
 ],
 "id": "overlay_6E265499_7343_503C_41DC_12471F5EF195",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.76,
   "yaw": 165.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED, this.camera_75AE64CB_7B1C_4699_41BA_5B6BC76DF974); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_566405B6_76C8_7BE8_41D1_DB49A578017E",
   "pitch": 10.33,
   "hfov": 14.76,
   "yaw": 165.67
  }
 ],
 "id": "overlay_68C3D7E4_76C9_A769_41D2_38C9BFD05FF0",
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": -1.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_66A330F0_76C9_D969_41B5_EE624B8094A7, null, true); this.playList_7441B301_7B1C_4389_41D1_8A7A5C40448E.set('selectedIndex', 0); ; this.viewer_uid7446F301_7B1C_4389_41D9_0707BA4EF8E0VideoPlayer.play(); ; this.playList_74458302_7B1C_438B_41BF_0B53054BCE2C.set('selectedIndex', 0); ",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_1_HS_0_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 1.34,
   "yaw": -1.91,
   "distance": 50
  }
 ],
 "id": "overlay_66E19186_76C9_DBA9_41B4_34CCE1BBCE38",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": 92.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0, this.camera_752BF488_7B1C_4687_41D3_F1B52A452919); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_69D5F44A_76C8_58B9_41D5_54E2EF7579E7",
   "pitch": 0.27,
   "hfov": 13.62,
   "yaw": 92.22
  }
 ],
 "id": "overlay_6611925C_76C8_F959_41CE_2F86BCEF3AB5",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": 1.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_6B6324A7_735E_B014_41C2_E509AB6E4B8B, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_1_HS_0_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": -0.48,
   "yaw": 1.59,
   "distance": 50
  }
 ],
 "id": "overlay_6B039BD2_7341_F00C_41AD_FCE0A7668368",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.6,
   "yaw": -118.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB, this.camera_769F641C_7B1C_45BF_41C1_F1E278143121); this.mainPlayList.set('selectedIndex', 12); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_5634376F_7343_5014_41B6_5C302ED03484",
   "pitch": -3.06,
   "hfov": 13.6,
   "yaw": -118.58
  }
 ],
 "id": "overlay_6B276AC9_735E_B01C_41D2_687C8A79693A",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.61,
   "yaw": 135.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF, this.camera_7695E423_7B1C_4589_41A1_5AD6ADBD3AF9); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_5634B76F_7343_5014_41C4_02289AE0BF16",
   "pitch": -2,
   "hfov": 13.61,
   "yaw": 135.81
  }
 ],
 "id": "overlay_6B683B82_735F_700C_41CB_9BC51A6E4E5E",
 "data": {
  "label": "Circle Arrow 02 Left-Up"
 }
},
{
 "id": "htmlText_6FB07505_76F9_B8AB_41BA_1A2BE47E3574",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText46891"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid7498231F_7B1C_43B9_41DD_E07B84D4E4FA_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_6E4E7430_7A6E_9E0F_41D7_A63122331734.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1878"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.83,
   "yaw": -22.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7A8E615F_76C9_BB57_41DD_685C1043C329, this.camera_76F0C461_7B1C_4589_41BD_B45D02717943); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_69D1C44A_76C8_58B9_41CB_3D2A7C7FE7E3",
   "pitch": -21.36,
   "hfov": 22.83,
   "yaw": -22.47
  }
 ],
 "id": "overlay_7855A0CB_76CF_F9BF_41BF_466A03F6114A",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.58,
   "yaw": -119.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_69D1744A_76C8_58B9_41DB_DFE28AED7A7D",
   "pitch": -4.43,
   "hfov": 13.58,
   "yaw": -119.78
  }
 ],
 "id": "overlay_79C4A054_76C8_58A8_419D_3141CCEF06FA",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.15,
   "yaw": 143.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_69D6844A_76C8_58B9_41D9_898C92B6ABF0",
   "pitch": -15.16,
   "hfov": 13.15,
   "yaw": 143.98
  }
 ],
 "id": "overlay_79D25F1A_76C9_A8D9_41D2_B0A06CDEFB4D",
 "data": {
  "label": "Circle Arrow 02 Left-Up"
 }
},
{
 "id": "htmlText_6B6564A7_735E_B014_419B_4E30A4F145DF",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText51373"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid7468E314_7B1C_438F_41D5_5A2C1410F80F_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_75BF8CE1_7A52_8E10_41D4_F68047814698.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1865"
 }
},
{
 "id": "htmlText_60753F02_76C8_A8A9_41B4_20914A5C7DAC",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText34989"
 },
 "scrollBarOpacity": 0.5
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.6,
   "yaw": -43.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_617C81AF_76C8_7BF7_41D3_A11D8D710A31, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.6,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0_HS_0_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": -3.36,
   "yaw": -43.22,
   "distance": 50
  }
 ],
 "id": "overlay_61568866_76C8_A969_41C3_938A7AC1A582",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.5,
   "yaw": -4.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_797C3658_72C7_503C_41B1_6AA54500EBD4, this.camera_764B23F2_7B1C_428B_41DA_5DD8BE513F5F); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_698AE46B_76C8_597F_41DB_6D1FFD172563",
   "pitch": -7.6,
   "hfov": 13.5,
   "yaw": -4.63
  }
 ],
 "id": "overlay_6166BC0F_76C8_68B8_41B7_FF50C564AE9F",
 "data": {
  "label": "Circle Arrow 02 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.58,
   "yaw": 150.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5, this.camera_7641A3FB_7B1C_427A_41D2_52E3866AC99D); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_698A046B_76C8_597F_41AF_8ADA510EAEAF",
   "pitch": -4.27,
   "hfov": 13.58,
   "yaw": 150.33
  }
 ],
 "id": "overlay_6ECFD7AC_76C8_E7F9_41B9_27B553DB1C54",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.61,
   "yaw": -134.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB, this.camera_7675040C_7B1C_459F_4198_A1BEA5284A9F); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_69B7C46B_76C8_597F_41C8_D1D160C20ECB",
   "pitch": 1.63,
   "hfov": 13.61,
   "yaw": -134.31
  }
 ],
 "id": "overlay_635EFB29_76C8_A8F8_41C2_750863E04FA8",
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.59,
   "yaw": 27.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_637454FD_76C8_D958_41C6_C586DEB80C8B, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.59,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0_HS_1_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 3.45,
   "yaw": 27.47,
   "distance": 50
  }
 ],
 "id": "overlay_636FA495_76C8_59AB_41CA_CD07F1157D16",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.61,
   "yaw": -88.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5, this.camera_7660F414_7B1C_458E_41DD_E7E20ECB2827); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_69B4846B_76C8_597F_41C3_F5606BA59FE7",
   "pitch": 2.38,
   "hfov": 13.61,
   "yaw": -88.16
  }
 ],
 "id": "overlay_60D1D161_76CB_BB68_41CF_6A6DAC0D8FC2",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "viewerArea": "this.viewer_uid7472030B_7B1C_4399_41B4_899E14DECA4F",
 "id": "viewer_uid7472030B_7B1C_4399_41B4_899E14DECA4FVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "AudioResource",
 "oggUrl": "media/audio_6379F848_72CF_701C_4165_85AD14E5CB7C.ogg",
 "mp3Url": "media/audio_6379F848_72CF_701C_4165_85AD14E5CB7C.mp3",
 "id": "audioresource_67D8D940_72C1_D00C_41AC_C9E03D9FA9F1"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.24,
   "yaw": 5.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_6077EF02_76C8_A8A9_4177_849BABCEE6CC, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0_HS_0_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 13.6,
   "yaw": 5.97,
   "distance": 50
  }
 ],
 "id": "overlay_60B110F7_76C8_F968_41DC_430BEB08FBD9",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.5,
   "yaw": -70.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F, this.camera_75EB24FE_7B1C_467B_41CA_A38D46DF822A); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_69B5A46B_76C8_597F_41C8_97A8D09EE7DD",
   "pitch": -7.45,
   "hfov": 13.5,
   "yaw": -70.3
  }
 ],
 "id": "overlay_60418C6B_76C8_697F_41DC_1C0C6A139FB8",
 "data": {
  "label": "Circle Arrow 02 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.59,
   "yaw": 69.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED, this.camera_75F9D4F1_7B1C_4689_41B9_A6760554E79C); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_69B5D46B_76C8_597F_41DC_388A417C4344",
   "pitch": 3.45,
   "hfov": 13.59,
   "yaw": 69.53
  }
 ],
 "id": "overlay_60334CD4_76C8_69A9_4197_7434B75A50BF",
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "id": "htmlText_6B048027_7346_B014_41B8_D2E82E640475",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e41\u0e21\u0e04\u0e40\u0e04\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e1f\u0e37\u0e49\u0e19\u0e1f\u0e39\u0e2a\u0e20\u0e32\u0e1e (Chiangmai Leper Asylum, McKean Leper (Leprosy) Home, McKean Leper (Leprosy) Hospital, Mckean Rehabilitation Institute for Leprosy Patients, McKean Rehabilitation Center)</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e1f\u0e37\u0e49\u0e19\u0e1f\u0e39\u0e2a\u0e20\u0e32\u0e1e\u0e41\u0e21\u0e04\u0e40\u0e04\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e17\u0e35\u0e48\u0e0a\u0e32\u0e27\u0e1a\u0e49\u0e32\u0e19\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b\u0e21\u0e31\u0e01\u0e40\u0e23\u0e35\u0e22\u0e01\u0e01\u0e31\u0e19\u0e27\u0e48\u0e32 \u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e40\u0e04\u0e19 \u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e42\u0e14\u0e22\u0e04\u0e27\u0e32\u0e21\u0e04\u0e34\u0e14\u0e23\u0e34\u0e40\u0e23\u0e34\u0e48\u0e21\u0e02\u0e2d\u0e07\u0e04\u0e13\u0e30\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e19\u0e19\u0e32\u0e23\u0e35\u0e0a\u0e32\u0e27\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e31\u0e19\u0e17\u0e35\u0e48\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32\u0e17\u0e33\u0e07\u0e32\u0e19\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28\u0e40\u0e1c\u0e22\u0e41\u0e1e\u0e23\u0e48\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e4c\u0e28\u0e32\u0e2a\u0e19\u0e32\u0e43\u0e19\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e42\u0e14\u0e22\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e22\u0e34\u0e48\u0e07\u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e40\u0e08\u0e21\u0e2a\u0e4c \u0e14\u0e31\u0e1a\u0e1a\u0e25\u0e34\u0e27. \u0e41\u0e21\u0e04\u0e40\u0e04\u0e19\u0e0b\u0e36\u0e48\u0e07\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e41\u0e15\u0e48\u0e07\u0e15\u0e31\u0e49\u0e07\u0e43\u0e2b\u0e49\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32\u0e17\u0e33\u0e07\u0e32\u0e19\u0e43\u0e19\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e1b\u0e35\u0e1e.\u0e28.2432 \u0e41\u0e25\u0e30\u0e44\u0e14\u0e49\u0e1e\u0e1a\u0e27\u0e48\u0e32\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e23\u0e04\u0e17\u0e35\u0e48\u0e2a\u0e31\u0e07\u0e04\u0e21\u0e23\u0e31\u0e07\u0e40\u0e01\u0e35\u0e22\u0e08 \u0e1c\u0e39\u0e49\u0e17\u0e35\u0e48\u0e1b\u0e48\u0e27\u0e22\u0e14\u0e49\u0e27\u0e22\u0e42\u0e23\u0e04\u0e19\u0e35\u0e49\u0e08\u0e30\u0e16\u0e39\u0e01\u0e02\u0e31\u0e1a\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e2b\u0e21\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19\u0e41\u0e25\u0e30\u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e02\u0e2d\u0e07\u0e2a\u0e31\u0e07\u0e04\u0e21 \u0e15\u0e49\u0e2d\u0e07\u0e23\u0e48\u0e2d\u0e19\u0e40\u0e23\u0e48\u0e02\u0e2d\u0e17\u0e32\u0e19\u0e08\u0e32\u0e01\u0e0a\u0e32\u0e27\u0e1a\u0e49\u0e32\u0e19 \u0e44\u0e21\u0e48\u0e21\u0e35\u0e43\u0e04\u0e23\u0e08\u0e49\u0e32\u0e07\u0e43\u0e2b\u0e49\u0e17\u0e33\u0e07\u0e32\u0e19 \u0e44\u0e21\u0e48\u0e21\u0e35\u0e17\u0e35\u0e48\u0e1e\u0e31\u0e01\u0e2d\u0e32\u0e28\u0e31\u0e22 \u0e08\u0e32\u0e01\u0e04\u0e27\u0e32\u0e21\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e02\u0e2d\u0e07\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e17\u0e35\u0e48\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e01\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e19\u0e17\u0e33\u0e43\u0e2b\u0e49\u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e41\u0e21\u0e04\u0e40\u0e04\u0e19\u0e44\u0e14\u0e49\u0e2b\u0e32\u0e17\u0e32\u0e07\u0e17\u0e35\u0e48\u0e08\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e19 </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2435 \u0e40\u0e23\u0e34\u0e48\u0e21\u0e21\u0e35\u0e01\u0e32\u0e23\u0e41\u0e08\u0e01\u0e40\u0e07\u0e34\u0e19\u0e41\u0e25\u0e30\u0e22\u0e32\u0e23\u0e31\u0e01\u0e29\u0e32\u0e42\u0e23\u0e04\u0e40\u0e1b\u0e47\u0e19\u0e23\u0e32\u0e22\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c\u0e43\u0e2b\u0e49\u0e41\u0e01\u0e48\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22 \u0e19\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19\u0e43\u0e19\u0e24\u0e14\u0e39\u0e2b\u0e19\u0e32\u0e27\u0e01\u0e47\u0e21\u0e35\u0e01\u0e32\u0e23\u0e41\u0e08\u0e01\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e1c\u0e49\u0e32\u0e41\u0e25\u0e30\u0e1c\u0e49\u0e32\u0e2b\u0e48\u0e21\u0e43\u0e2b\u0e49\u0e14\u0e49\u0e27\u0e22 \u0e15\u0e48\u0e2d\u0e21\u0e32\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2440 \u0e40\u0e08\u0e49\u0e32\u0e1c\u0e39\u0e49\u0e04\u0e23\u0e2d\u0e07\u0e19\u0e04\u0e23\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e07\u0e04\u0e4c\u0e17\u0e35\u0e48 8 \u0e40\u0e08\u0e49\u0e32\u0e2d\u0e34\u0e19\u0e17\u0e27\u0e42\u0e23\u0e23\u0e2a\u0e2a\u0e38\u0e23\u0e34\u0e22\u0e27\u0e07\u0e04\u0e4c\u0e44\u0e14\u0e49\u0e21\u0e2d\u0e1a\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19\u0e04\u0e23\u0e36\u0e48\u0e07\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e40\u0e01\u0e32\u0e30\u0e43\u0e19\u0e41\u0e21\u0e48\u0e19\u0e49\u0e33\u0e1b\u0e34\u0e07\u0e0b\u0e36\u0e48\u0e07\u0e2b\u0e48\u0e32\u0e07\u0e08\u0e32\u0e01\u0e15\u0e31\u0e27\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e44\u0e1b\u0e17\u0e32\u0e07\u0e17\u0e34\u0e28\u0e43\u0e15\u0e49 5 \u0e44\u0e21\u0e25\u0e4c \u0e43\u0e2b\u0e49\u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e41\u0e21\u0e04\u0e40\u0e04\u0e19\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e35\u0e48\u0e23\u0e31\u0e01\u0e29\u0e32\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e19 \u0e40\u0e14\u0e34\u0e21\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19\u0e41\u0e2b\u0e48\u0e07\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e35\u0e48\u0e40\u0e25\u0e35\u0e49\u0e22\u0e07\u0e0a\u0e49\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e23\u0e32\u0e0a\u0e1a\u0e38\u0e15\u0e23\u0e40\u0e08\u0e49\u0e32\u0e2d\u0e34\u0e19\u0e17\u0e27\u0e42\u0e23\u0e23\u0e2a \u0e41\u0e15\u0e48\u0e20\u0e32\u0e22\u0e2b\u0e25\u0e31\u0e07\u0e1e\u0e1a\u0e27\u0e48\u0e32\u0e0a\u0e49\u0e32\u0e07\u0e40\u0e0a\u0e37\u0e2d\u0e01\u0e14\u0e31\u0e07\u0e01\u0e25\u0e48\u0e32\u0e27\u0e40\u0e1b\u0e47\u0e19\u0e0a\u0e49\u0e32\u0e07\u0e17\u0e35\u0e48\u0e14\u0e38\u0e23\u0e49\u0e32\u0e22\u0e44\u0e21\u0e48\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e17\u0e35\u0e48\u0e08\u0e30\u0e40\u0e25\u0e35\u0e49\u0e22\u0e07\u0e44\u0e27\u0e49\u0e43\u0e0a\u0e49 \u0e40\u0e08\u0e49\u0e32\u0e1c\u0e39\u0e49\u0e04\u0e23\u0e2d\u0e07\u0e19\u0e04\u0e23\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e07\u0e04\u0e4c\u0e17\u0e35\u0e48 8 \u0e40\u0e08\u0e49\u0e32\u0e2d\u0e34\u0e19\u0e17\u0e27\u0e42\u0e23\u0e23\u0e2a\u0e2a\u0e38\u0e23\u0e34\u0e22\u0e27\u0e07\u0e04\u0e4c\u0e08\u0e36\u0e07\u0e2a\u0e48\u0e07\u0e0a\u0e49\u0e32\u0e07\u0e14\u0e31\u0e07\u0e01\u0e25\u0e48\u0e32\u0e27\u0e44\u0e1b\u0e44\u0e27\u0e49\u0e22\u0e31\u0e07\u0e40\u0e01\u0e32\u0e30\u0e01\u0e25\u0e32\u0e07\u0e19\u0e49\u0e33\u0e1b\u0e34\u0e07 \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e01\u0e32\u0e30\u0e01\u0e25\u0e32\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e32\u0e07\u0e43\u0e15\u0e49\u0e02\u0e2d\u0e07\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e0a\u0e49\u0e32\u0e07\u0e40\u0e0a\u0e37\u0e2d\u0e01\u0e14\u0e31\u0e07\u0e01\u0e25\u0e48\u0e32\u0e27\u0e44\u0e14\u0e49\u0e17\u0e33\u0e25\u0e32\u0e22\u0e2a\u0e27\u0e19 \u0e44\u0e23\u0e48\u0e19\u0e32 \u0e23\u0e27\u0e21\u0e17\u0e31\u0e49\u0e07\u0e1a\u0e49\u0e32\u0e19\u0e40\u0e23\u0e37\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e0a\u0e32\u0e27\u0e1a\u0e49\u0e32\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e32\u0e30\u0e01\u0e25\u0e32\u0e07 \u0e17\u0e33\u0e43\u0e2b\u0e49\u0e0a\u0e32\u0e27\u0e1a\u0e49\u0e32\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e22\u0e49\u0e32\u0e22\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e40\u0e01\u0e32\u0e30\u0e01\u0e25\u0e32\u0e07 \u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e0a\u0e49\u0e32\u0e07\u0e40\u0e0a\u0e37\u0e2d\u0e01\u0e19\u0e35\u0e49\u0e15\u0e32\u0e22\u0e25\u0e07\u0e0a\u0e32\u0e27\u0e1a\u0e49\u0e32\u0e19\u0e01\u0e47\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e22\u0e49\u0e32\u0e22\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e17\u0e35\u0e48\u0e40\u0e01\u0e32\u0e30\u0e01\u0e25\u0e32\u0e07\u0e41\u0e2b\u0e48\u0e07\u0e19\u0e35\u0e49\u0e2d\u0e35\u0e01</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2451 \u0e21\u0e35\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e19\u0e08\u0e33\u0e19\u0e27\u0e19 9 \u0e04\u0e19 \u0e44\u0e14\u0e49\u0e22\u0e49\u0e32\u0e22\u0e40\u0e02\u0e49\u0e32\u0e44\u0e1b\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e40\u0e01\u0e32\u0e30\u0e01\u0e25\u0e32\u0e07 \u0e44\u0e14\u0e49\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e01\u0e23\u0e30\u0e17\u0e48\u0e2d\u0e21\u0e17\u0e35\u0e48\u0e1e\u0e31\u0e01\u0e02\u0e2d\u0e07\u0e15\u0e19\u0e40\u0e2d\u0e07 \u0e23\u0e27\u0e21\u0e17\u0e31\u0e49\u0e07\u0e42\u0e1a\u0e2a\u0e16\u0e4c\u0e44\u0e21\u0e49\u0e44\u0e1c\u0e48 \u0e41\u0e15\u0e48\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e48\u0e19\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e43\u0e14\u0e46 \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22 \u0e08\u0e19\u0e01\u0e23\u0e30\u0e17\u0e31\u0e48\u0e07\u0e1b\u0e35\u0e1e.\u0e28.2454 \u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e41\u0e21\u0e04\u0e40\u0e04\u0e19\u0e44\u0e14\u0e49\u0e44\u0e1b\u0e14\u0e39\u0e07\u0e32\u0e19\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e2d\u0e34\u0e19\u0e40\u0e14\u0e35\u0e22 \u0e08\u0e36\u0e07\u0e40\u0e23\u0e34\u0e48\u0e21\u0e21\u0e35\u0e01\u0e32\u0e23\u0e01\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e16\u0e32\u0e27\u0e23\u0e02\u0e2d\u0e07\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19 \u0e2d\u0e32\u0e04\u0e32\u0e23\u0e2a\u0e32\u0e21\u0e2b\u0e25\u0e31\u0e07\u0e41\u0e23\u0e01\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e04\u0e37\u0e2d\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e2b\u0e0d\u0e34\u0e07 \u0e2d\u0e32\u0e04\u0e32\u0e23\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e0a\u0e32\u0e22 \u0e41\u0e25\u0e30\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e2d\u0e33\u0e19\u0e27\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19 \u0e21\u0e35\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e23\u0e30\u0e1a\u0e1a\u0e17\u0e35\u0e48\u0e1e\u0e31\u0e01\u0e2d\u0e32\u0e28\u0e31\u0e22\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22 \u0e42\u0e14\u0e22\u0e2d\u0e32\u0e28\u0e31\u0e22\u0e41\u0e1a\u0e1a\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e08\u0e32\u0e01\u0e07\u0e32\u0e19\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e48\u0e19\u0e43\u0e19\u0e2d\u0e34\u0e19\u0e40\u0e14\u0e35\u0e22 \u0e1f\u0e34\u0e25\u0e34\u0e1b\u0e1b\u0e34\u0e19\u0e2a\u0e4c \u0e0d\u0e35\u0e48\u0e1b\u0e38\u0e48\u0e19 \u0e41\u0e25\u0e30\u0e08\u0e35\u0e19 \u0e15\u0e48\u0e2d\u0e21\u0e32\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2456 \u0e44\u0e14\u0e49\u0e40\u0e1b\u0e34\u0e14\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e19\u0e35\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23 \u0e01\u0e32\u0e23\u0e23\u0e31\u0e01\u0e29\u0e32\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e08\u0e23\u0e34\u0e07\u0e08\u0e31\u0e07\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e21\u0e35\u0e01\u0e32\u0e23\u0e27\u0e34\u0e08\u0e31\u0e22 \u0e41\u0e25\u0e30\u0e17\u0e14\u0e25\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e09\u0e35\u0e14\u0e19\u0e49\u0e33\u0e21\u0e31\u0e19\u0e01\u0e23\u0e30\u0e40\u0e1a\u0e32\u0e43\u0e2b\u0e49\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e2d\u0e34\u0e19\u0e40\u0e14\u0e35\u0e22 \u0e41\u0e25\u0e30\u0e1f\u0e34\u0e25\u0e34\u0e1b\u0e1b\u0e34\u0e19\u0e2a\u0e4c\u0e44\u0e14\u0e49\u0e1c\u0e25\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2459 \u0e01\u0e32\u0e23\u0e23\u0e31\u0e01\u0e29\u0e32\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e19\u0e43\u0e19\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e14\u0e49\u0e27\u0e22\u0e19\u0e49\u0e33\u0e21\u0e31\u0e19\u0e01\u0e23\u0e30\u0e40\u0e1a\u0e32\u0e08\u0e36\u0e07\u0e44\u0e14\u0e49\u0e40\u0e23\u0e34\u0e48\u0e21\u0e02\u0e36\u0e49\u0e19\u0e41\u0e25\u0e30\u0e44\u0e14\u0e49\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e08\u0e19\u0e16\u0e36\u0e07\u0e2a\u0e21\u0e31\u0e22\u0e2a\u0e07\u0e04\u0e23\u0e32\u0e21\u0e42\u0e25\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e17\u0e35\u0e48 2 \u0e01\u0e32\u0e23\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e07\u0e32\u0e19\u0e14\u0e39\u0e41\u0e25\u0e23\u0e31\u0e01\u0e29\u0e32\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e19\u0e19\u0e35\u0e49\u0e43\u0e19\u0e15\u0e2d\u0e19\u0e41\u0e23\u0e01\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e49\u0e1a\u0e23\u0e34\u0e08\u0e32\u0e04\u0e08\u0e32\u0e01\u0e0a\u0e32\u0e27\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e15\u0e48\u0e2d\u0e21\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e01\u0e34\u0e08\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e04\u0e19\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e19\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29\u0e01\u0e47\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32\u0e43\u0e2b\u0e49\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e08\u0e19\u0e01\u0e23\u0e30\u0e17\u0e31\u0e48\u0e07\u0e1b\u0e35\u0e1e.\u0e28.2460 \u0e41\u0e25\u0e30\u0e20\u0e32\u0e23\u0e01\u0e34\u0e08\u0e0a\u0e32\u0e27\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e31\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e19 \u0e44\u0e14\u0e49\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32\u0e43\u0e2b\u0e49\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e15\u0e48\u0e2d \u0e43\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e02\u0e2d\u0e07\u0e23\u0e31\u0e10\u0e1a\u0e32\u0e25\u0e2a\u0e20\u0e32\u0e01\u0e32\u0e0a\u0e32\u0e14\u0e44\u0e17\u0e22\u0e44\u0e14\u0e49\u0e43\u0e2b\u0e49\u0e01\u0e32\u0e23\u0e22\u0e2d\u0e21\u0e23\u0e31\u0e1a\u0e07\u0e32\u0e19\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e48\u0e19\u0e43\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e02\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e14\u0e39\u0e41\u0e25\u0e23\u0e31\u0e01\u0e29\u0e32\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e19\u0e41\u0e25\u0e30\u0e44\u0e14\u0e49\u0e43\u0e2b\u0e49\u0e40\u0e07\u0e34\u0e19\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e1b\u0e35\u0e1e.\u0e28.2467 \u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e19\u0e21\u0e32 \u0e42\u0e14\u0e22\u0e43\u0e2b\u0e49\u0e40\u0e07\u0e34\u0e19\u0e1b\u0e35\u0e25\u0e30 10,000 \u0e1a\u0e32\u0e17 \u0e15\u0e48\u0e2d\u0e21\u0e32\u0e01\u0e2d\u0e07\u0e17\u0e38\u0e19\u0e2b\u0e21\u0e2d\u0e40\u0e2e\u0e22\u0e2a\u0e4c (T.Heyward Hays) \u0e44\u0e14\u0e49\u0e2a\u0e48\u0e07\u0e40\u0e07\u0e34\u0e19\u0e08\u0e32\u0e01\u0e14\u0e2d\u0e01\u0e1c\u0e25\u0e02\u0e2d\u0e07\u0e01\u0e2d\u0e07\u0e17\u0e38\u0e19\u0e21\u0e32\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e14\u0e49\u0e27\u0e22 \u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e07\u0e32\u0e19\u0e02\u0e2d\u0e07\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e2a\u0e07\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e19\u0e41\u0e21\u0e04\u0e40\u0e04\u0e19\u0e44\u0e14\u0e49\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e07\u0e32\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e21\u0e35\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e07\u0e32\u0e19\u0e21\u0e32\u0e42\u0e14\u0e22\u0e15\u0e25\u0e2d\u0e14 \u0e15\u0e48\u0e2d\u0e21\u0e32\u0e01\u0e23\u0e23\u0e21\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e07\u0e32\u0e19\u0e2a\u0e20\u0e32\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e08\u0e31\u0e01\u0e23\u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22 \u0e08\u0e36\u0e07\u0e21\u0e35\u0e21\u0e15\u0e34\u0e17\u0e35\u0e48 \u0e2a.\u0e14. 225/2530 \u0e2d\u0e19\u0e38\u0e21\u0e31\u0e15\u0e34\u0e43\u0e2b\u0e49\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e41\u0e21\u0e04\u0e40\u0e04\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e1f\u0e37\u0e49\u0e19\u0e1f\u0e39\u0e2a\u0e20\u0e32\u0e1e (McKean Rehabilitation Center) </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2541 \u0e2a\u0e20\u0e32\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e08\u0e31\u0e01\u0e23\u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22\u0e44\u0e14\u0e49\u0e21\u0e35\u0e21\u0e15\u0e34 \u0e2a.\u0e14. 188/2541 \u0e43\u0e2b\u0e49\u0e2a\u0e16\u0e32\u0e1a\u0e31\u0e19\u0e41\u0e21\u0e04\u0e40\u0e04\u0e19\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e08\u0e14\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e2a\u0e16\u0e32\u0e19\u0e20\u0e32\u0e1e\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText44282"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid746BB314_7B1C_438F_41C2_5B7D6F6170A0_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_75904AB7_7A53_8A70_41DE_26FDF29784B2.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1864"
 }
},
{
 "id": "htmlText_6C1B6AB7_76F8_A9D7_41D0_9F94CE47D9AC",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText52508"
 },
 "scrollBarOpacity": 0.5
},
{
 "media": "this.album_6F515056_7A71_F630_41C2_4DF484A896E3",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_6F515056_7A71_F630_41C2_4DF484A896E3_AlbumPlayList, this.htmltext_7479B30A_7B1C_439B_41DA_8C1C2B10FF3A, this.albumitem_7479F309_7B1C_4386_41D4_5A853434A97B); this.loopAlbum(this.playList_74458302_7B1C_438B_41BF_0B53054BCE2C, 0)",
 "player": "this.viewer_uid7445D302_7B1C_438B_41C9_63A41C9167F5PhotoAlbumPlayer",
 "id": "albumitem_7479F309_7B1C_4386_41D4_5A853434A97B"
},
{
 "media": "this.album_62E25E26_72C1_5014_41CC_E7DA4463DC85",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_62E25E26_72C1_5014_41CC_E7DA4463DC85_AlbumPlayList, this.htmltext_747D130B_7B1C_4399_415F_C2DC39E97675, this.albumitem_747C430B_7B1C_4399_41D3_9F2BB06FAE32); this.loopAlbum(this.playList_747C030B_7B1C_439A_41D8_FA6B86486A40, 0)",
 "player": "this.viewer_uid747C530B_7B1C_439A_41D2_C2B442BF1BE6PhotoAlbumPlayer",
 "id": "albumitem_747C430B_7B1C_4399_41D3_9F2BB06FAE32"
},
{
 "viewerArea": "this.viewer_uid7446F301_7B1C_4389_41D9_0707BA4EF8E0",
 "id": "viewer_uid7446F301_7B1C_4389_41D9_0707BA4EF8E0VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "id": "htmlText_6D916EE7_7342_B014_41D2_8BD6F302138E",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText73987"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid746DC317_7B1C_4389_41D5_0CA4F529F667_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_6A1448ED_7A56_9610_41D3_D2B2CC45FBB4.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1868"
 }
},
{
 "id": "htmlText_668CD1E7_72C3_7014_41CD_5AE3FFC44C18",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e15\u0e36\u0e01 AB</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e1b\u0e35\u0e1e.\u0e28.2458 \u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e40\u0e2d\u0e47\u0e14\u0e27\u0e34\u0e19 \u0e0b\u0e35. \u0e04\u0e2d\u0e23\u0e4c\u0e15 \u0e1c\u0e39\u0e49\u0e27\u0e32\u0e07\u0e23\u0e32\u0e01\u0e10\u0e32\u0e19\u0e27\u0e34\u0e0a\u0e32\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e41\u0e1c\u0e19\u0e43\u0e2b\u0e21\u0e48 \u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e0a\u0e33\u0e19\u0e32\u0e0d\u0e17\u0e32\u0e07\u0e22\u0e32 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e27\u0e34\u0e19\u0e34\u0e08\u0e09\u0e31\u0e22\u0e42\u0e23\u0e04 \u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e21\u0e32\u0e16\u0e36\u0e07\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e44\u0e14\u0e49\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e01\u0e32\u0e23\u0e41\u0e1e\u0e17\u0e22\u0e4c \u0e01\u0e32\u0e23\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e2a\u0e32\u0e18\u0e32\u0e23\u0e13\u0e2a\u0e38\u0e02\u0e04\u0e27\u0e1a\u0e04\u0e39\u0e48\u0e44\u0e1b\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 \u0e0b\u0e36\u0e48\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e31\u0e19\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e48\u0e19\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e16\u0e37\u0e2d\u0e44\u0e27\u0e49\u0e27\u0e32\u0e07\u0e43\u0e08\u0e08\u0e32\u0e01\u0e0a\u0e32\u0e27\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e21\u0e32\u0e01 \u0e08\u0e19\u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e40\u0e2d\u0e47\u0e14\u0e27\u0e34\u0e19 \u0e0b\u0e35. \u0e04\u0e2d\u0e23\u0e4c\u0e15\u0e40\u0e2b\u0e47\u0e19\u0e27\u0e48\u0e32\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e04\u0e31\u0e1a\u0e41\u0e04\u0e1a \u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e02\u0e22\u0e32\u0e22\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e02\u0e19\u0e32\u0e14\u0e43\u0e2b\u0e0d\u0e48\u0e44\u0e14\u0e49 \u0e08\u0e36\u0e07\u0e0b\u0e37\u0e49\u0e2d\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19\u0e1a\u0e23\u0e34\u0e40\u0e27\u0e13\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e35\u0e48\u0e15\u0e31\u0e49\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04\u0e43\u0e19\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e41\u0e25\u0e49\u0e27\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e43\u0e2b\u0e21\u0e48 \u0e42\u0e14\u0e22\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e40\u0e07\u0e34\u0e19\u0e1a\u0e23\u0e34\u0e08\u0e32\u0e04\u0e08\u0e32\u0e01\u0e21\u0e34\u0e2a\u0e0b\u0e34\u0e2a\u0e41\u0e19\u0e19\u0e0b\u0e35 \u0e1f\u0e32\u0e27\u0e40\u0e25\u0e2d\u0e23\u0e4c \u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04 \u0e41\u0e25\u0e30\u0e15\u0e31\u0e49\u0e07\u0e0a\u0e37\u0e48\u0e2d\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e15\u0e32\u0e21\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e1a\u0e23\u0e34\u0e08\u0e32\u0e04\u0e40\u0e07\u0e34\u0e19 \u0e40\u0e23\u0e34\u0e48\u0e21\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2463 \u0e41\u0e25\u0e30\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2467 \u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e14\u0e49\u0e27\u0e22\u0e2d\u0e32\u0e04\u0e32\u0e23 4 \u0e2b\u0e25\u0e31\u0e07\u0e41\u0e23\u0e01 \u0e04\u0e37\u0e2d \u0e2d\u0e32\u0e04\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e19\u0e2d\u0e01 (\u0e15\u0e36\u0e01\u0e1c\u0e48\u0e32\u0e15\u0e31\u0e14 ) \u0e2d\u0e32\u0e04\u0e32\u0e23 AB (\u0e15\u0e36\u0e01\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e43\u0e19) \u0e2d\u0e32\u0e04\u0e32\u0e23\u0e42\u0e20\u0e0a\u0e19\u0e32\u0e01\u0e32\u0e23\u0e41\u0e25\u0e30\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e1e\u0e34\u0e40\u0e28\u0e29 (\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e16\u0e39\u0e01\u0e23\u0e37\u0e49\u0e2d\u0e16\u0e2d\u0e19\u0e41\u0e25\u0e30\u0e16\u0e39\u0e01\u0e41\u0e17\u0e19\u0e17\u0e35\u0e48\u0e14\u0e49\u0e27\u0e22\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e43\u0e2b\u0e21\u0e48) \u0e41\u0e25\u0e30\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 13 \u0e21\u0e01\u0e23\u0e32\u0e04\u0e21 \u0e1e.\u0e28.2467 \u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e40\u0e08\u0e49\u0e32\u0e1f\u0e49\u0e32\u0e21\u0e2b\u0e34\u0e14\u0e25\u0e2d\u0e14\u0e38\u0e25\u0e22\u0e40\u0e14\u0e0a \u0e01\u0e23\u0e21\u0e2b\u0e25\u0e27\u0e07\u0e2a\u0e07\u0e02\u0e25\u0e32\u0e19\u0e04\u0e23\u0e34\u0e19\u0e17\u0e23\u0e4c \u0e40\u0e2a\u0e14\u0e47\u0e08\u0e21\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e07\u0e04\u0e4c\u0e1b\u0e23\u0e30\u0e18\u0e32\u0e19\u0e43\u0e19\u0e1e\u0e34\u0e18\u0e35\u0e40\u0e1b\u0e34\u0e14\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04 \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e2b\u0e21\u0e48\u0e2d\u0e21\u0e2a\u0e31\u0e07\u0e27\u0e32\u0e25\u0e22\u0e4c \u0e2a\u0e07\u0e02\u0e25\u0e32 \u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e17\u0e35\u0e48\u0e17\u0e23\u0e07\u0e01\u0e23\u0e30\u0e17\u0e33\u0e1e\u0e34\u0e18\u0e35\u0e40\u0e1b\u0e34\u0e14\u0e41\u0e25\u0e49\u0e27\u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c\u0e44\u0e14\u0e49\u0e40\u0e2a\u0e14\u0e47\u0e08\u0e17\u0e2d\u0e14\u0e1e\u0e23\u0e30\u0e40\u0e19\u0e15\u0e23\u0e01\u0e34\u0e08\u0e01\u0e32\u0e23\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e17\u0e31\u0e48\u0e27\u0e41\u0e25\u0e49\u0e27\u0e08\u0e36\u0e07\u0e23\u0e31\u0e1a\u0e2a\u0e31\u0e48\u0e07\u0e27\u0e48\u0e32 \u201c\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e0d\u0e48\u0e22\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 \u0e04\u0e37\u0e2d\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e36\u0e49\u0e19\u201d \u0e40\u0e27\u0e25\u0e32\u0e19\u0e31\u0e49\u0e19\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e0a\u0e32\u0e27\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e31\u0e19\u0e21\u0e35\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c \u0e2d\u0e35 \u0e0b\u0e35 \u0e04\u0e2d\u0e23\u0e4c\u0e15 \u0e04\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27\u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c\u0e08\u0e36\u0e07\u0e17\u0e23\u0e07\u0e23\u0e31\u0e1a\u0e2a\u0e31\u0e48\u0e07\u0e27\u0e48\u0e32\u0e08\u0e30\u0e17\u0e23\u0e07\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e17\u0e32\u0e19\u0e04\u0e48\u0e32\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e41\u0e25\u0e30\u0e40\u0e07\u0e34\u0e19\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e43\u0e2b\u0e49\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e04\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07 \u0e43\u0e19\u0e1b\u0e35\u0e15\u0e48\u0e2d\u0e21\u0e32\u0e08\u0e36\u0e07\u0e44\u0e14\u0e49\u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c \u0e40\u0e2e\u0e19\u0e23\u0e35\u0e48 \u0e2d\u0e32\u0e23\u0e4c \u0e42\u0e2d\u0e44\u0e1a\u0e23\u0e2d\u0e31\u0e19 \u0e21\u0e32\u0e23\u0e48\u0e27\u0e21\u0e17\u0e33\u0e07\u0e32\u0e19\u0e43\u0e19\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText21198"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid7476B30D_7B1C_439E_41C2_CC3FFC286972_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_66775737_72C1_5074_41A8_1CA36B6CD3D8.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1860"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": 2.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_6B286D15_7A57_8E30_41D5_6E687055B10A, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0_HS_0_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 0.27,
   "yaw": 2.04,
   "distance": 50
  }
 ],
 "id": "overlay_66336966_76D8_6B69_41AD_F93341576583",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.6,
   "yaw": -49.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_796B28E3_72C7_500C_41DA_450F54B79F10, this.camera_756074AD_7B1C_4699_41DE_4BBE4B5C9B6C); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_69B3146B_76C8_597F_41D0_95CDE66432C9",
   "pitch": 2.7,
   "hfov": 13.6,
   "yaw": -49.41
  }
 ],
 "id": "overlay_67DE371E_76D9_B8D8_41DB_F162D7A9CD22",
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.86,
   "yaw": 159.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7975D71A_72C7_703C_41D7_F92A481EDED9, this.camera_757114A5_7B1C_4689_41CE_9098C15AA473); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_69B0946B_76C8_597F_41C4_CB32BDF58B90",
   "pitch": -2.08,
   "hfov": 12.86,
   "yaw": 159.95
  }
 ],
 "id": "overlay_6719CB19_76DB_A8DB_41DC_EDF0C62E2CB1",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.47,
   "yaw": -103.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_69B0246B_76C8_597F_41D4_0AEAFDCD0484",
   "pitch": -3.36,
   "hfov": 24.47,
   "yaw": -103.6
  }
 ],
 "id": "overlay_64C0F944_76D8_E8A9_41CE_092DF372DAEC",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.49,
   "yaw": 99.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_79699415_72C6_B034_41D9_C19923ABFD5E, this.camera_7546A49E_7B1C_46BB_41D6_C2B5CB15E245); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_69B0446B_76C8_597F_41D8_36A77E515C91",
   "pitch": -2.75,
   "hfov": 24.49,
   "yaw": 99.49
  }
 ],
 "id": "overlay_64A4C95C_76D9_AB59_41CA_0E700E55CBAA",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.61,
   "yaw": -45.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_79751ACF_72C6_B015_41BE_A57AE535C940, this.camera_6B6CC39B_7B1C_42B9_41DC_2D00F07971AA); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_5638C770_7343_500C_419E_78CA1EBCE2A9",
   "pitch": 1.93,
   "hfov": 13.61,
   "yaw": -45.33
  }
 ],
 "id": "overlay_6F41431B_7343_503C_41CB_C2E255CADEEF",
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.51,
   "yaw": -131.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB, this.camera_6B7D3393_7B1C_4289_41DD_67E3234C21B7); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_56395770_7343_500C_41D7_0AB05C106498",
   "pitch": 0.89,
   "hfov": 24.51,
   "yaw": -131.29
  }
 ],
 "id": "overlay_6F4179C8_7342_D01C_41D8_DC541B31BF8E",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": 53.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_796B5FDC_72C7_5034_41D7_43EE36561E31, this.camera_6B4D338B_7B1C_4299_41DA_93753C430156); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_5639F770_7343_500C_41D2_94B5AC45797B",
   "pitch": 1.34,
   "hfov": 13.62,
   "yaw": 53.93
  }
 ],
 "id": "overlay_6F776770_7341_B00C_4188_75E0D1D4D158",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.51,
   "yaw": 107.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_56399770_7343_500C_41DA_9E2A7F5EB2B2",
   "pitch": 0.27,
   "hfov": 24.51,
   "yaw": 107.05
  }
 ],
 "id": "overlay_6E98C199_7347_703C_41DB_F5866DF48E35",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": 137.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_563E2770_7343_500C_41D2_8919DD237002",
   "pitch": 0.89,
   "hfov": 13.62,
   "yaw": 137.46
  }
 ],
 "id": "overlay_6EBDF545_7346_D014_41DC_9A0537C1CB08",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": -3.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_6D938EE7_7342_B014_41BE_86FF9F965348, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_1_HS_5_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 0.89,
   "yaw": -3.4,
   "distance": 50
  }
 ],
 "id": "overlay_6D2CE560_7341_700C_41C0_32C2E08D903E",
 "data": {
  "label": "Image"
 }
},
{
 "items": [
  {
   "media": "this.album_6F515056_7A71_F630_41C2_4DF484A896E3_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.75",
     "class": "PhotoCameraPosition",
     "y": "0.48",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_6F515056_7A71_F630_41C2_4DF484A896E3_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.45",
     "class": "PhotoCameraPosition",
     "y": "0.46",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear"
   }
  }
 ],
 "id": "album_6F515056_7A71_F630_41C2_4DF484A896E3_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "id": "htmlText_6B2A7D15_7A57_8E30_41D6_F7988EAE5287",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText12409"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid746D6317_7B1C_4389_41CC_B382F95F6FC0_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_6A1448ED_7A56_9610_41D3_D2B2CC45FBB4.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1869"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 55.07,
  "x": 648,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_62C860A9_7362_D710_41D7_EB75882EF1BE_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 447.27,
  "offsetY": 0,
  "height": 55.07,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 648,
  "y": 447.27,
  "width": 55.07,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_62C860A9_7362_D710_41D7_EB75882EF1BE_HS_0.png",
     "width": 55,
     "class": "ImageResourceLevel",
     "height": 55
    }
   ]
  },
  "height": 55.07
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_6249A372_7362_59F0_41C7_48EBE2E37FA0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": 58.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_796B28E3_72C7_500C_41DA_450F54B79F10, this.camera_7525A48F_7B1C_4699_41AA_F127B984A923); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_563AB76F_7343_5014_41D9_4F263337F95E",
   "pitch": 0.57,
   "hfov": 13.62,
   "yaw": 58.63
  }
 ],
 "id": "overlay_69AF8934_7342_F074_41DA_B9539C16E13F",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": -74.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_563B476F_7343_5014_41C8_B99D0136DD38",
   "pitch": -1.25,
   "hfov": 13.62,
   "yaw": -74.54
  }
 ],
 "id": "overlay_69D70544_7343_5014_41D5_54B74BAEAB0B",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.47,
   "yaw": 126.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB, this.camera_7554E496_7B1C_4688_41D1_4B1922DFEE06); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_563BE770_7343_500C_41D5_805D26B680E2",
   "pitch": 3.29,
   "hfov": 24.47,
   "yaw": 126.73
  }
 ],
 "id": "overlay_69D57401_7342_D00C_41A0_A79E780AE726",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.58,
   "yaw": -107.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_563B8770_7343_500C_41D8_79096A72DA83",
   "pitch": 4.52,
   "hfov": 13.58,
   "yaw": -107.82
  }
 ],
 "id": "overlay_68131B47_734F_5014_41B3_F5D743D442D2",
 "data": {
  "label": "Circle Arrow 04 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.5,
   "yaw": 4.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_6FB0793F_7341_5074_41D2_73422C1593FD, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.5,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_1_HS_4_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": -7.6,
   "yaw": 4.61,
   "distance": 50
  }
 ],
 "id": "overlay_6F716A0C_7341_F014_41CD_10C7B046A7C2",
 "data": {
  "label": "Image"
 }
},
{
 "id": "htmlText_62372E41_76D9_A8AB_41CD_94FDC0136E38",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText21650"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "htmlText_617A41AF_76C8_7BF7_41A3_B34704B4CF79",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText41069"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid749A431E_7B1C_43BB_41B9_75DB87CF3785_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_69C5E2E0_7A6F_BA10_41D3_6CE21FCD6C87.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1877"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.3,
   "yaw": 162.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_79FC54BD_72C3_7075_41D6_E4987603A213, this.camera_759234B4_7B1C_468F_41D8_1DA8B0AEFF48); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_562D875F_7343_5034_41D8_B1F4F0A0BB4A",
   "pitch": -25.45,
   "hfov": 12.3,
   "yaw": 162.3
  }
 ],
 "id": "overlay_61482069_72CF_701C_41AD_AD5BD9ED4021",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.6,
   "yaw": -22.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_668E81E7_72C3_7014_41C0_8A2B38FA7DCF, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.6,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_1_HS_1_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 3.29,
   "yaw": -22.47,
   "distance": 50
  }
 ],
 "id": "overlay_66F1DB80_72C2_D00C_41D1_7635BB9E302C",
 "data": {
  "label": "Image"
 }
},
{
 "id": "htmlText_64FE9360_72C1_F00C_41D6_C7275F6C382D",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e15\u0e36\u0e01\u0e21\u0e2b\u0e34\u0e14\u0e25</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e1b\u0e35 \u0e1e.\u0e28.2481 \u0e1e\u0e23\u0e30\u0e1a\u0e32\u0e17\u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e40\u0e08\u0e49\u0e32\u0e2d\u0e22\u0e39\u0e48\u0e2b\u0e31\u0e27\u0e2d\u0e32\u0e19\u0e31\u0e19\u0e17\u0e21\u0e2b\u0e34\u0e14\u0e25 \u0e23\u0e31\u0e0a\u0e01\u0e32\u0e25\u0e17\u0e35\u0e48 8 \u0e44\u0e14\u0e49\u0e17\u0e23\u0e07\u0e1e\u0e23\u0e30\u0e01\u0e23\u0e38\u0e13\u0e32\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e01\u0e25\u0e49\u0e32\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e17\u0e32\u0e19\u0e17\u0e23\u0e31\u0e1e\u0e22\u0e4c\u0e2a\u0e48\u0e27\u0e19\u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c \u0e08\u0e33\u0e19\u0e27\u0e19 10,000 \u0e1a\u0e32\u0e17 \u0e41\u0e01\u0e48\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e21\u0e17\u0e1a\u0e17\u0e38\u0e19\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e15\u0e36\u0e01\u0e21\u0e2b\u0e34\u0e14\u0e25 \u0e43\u0e2b\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e1e\u0e23\u0e30\u0e1a\u0e23\u0e21\u0e23\u0e32\u0e0a\u0e32\u0e19\u0e38\u0e2a\u0e23\u0e13\u0e4c\u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e21\u0e2b\u0e34\u0e15\u0e25\u0e32\u0e18\u0e34\u0e40\u0e1a\u0e28\u0e23 \u0e2d\u0e14\u0e38\u0e25\u0e22\u0e40\u0e14\u0e0a\u0e27\u0e34\u0e01\u0e23\u0e21 \u0e1e\u0e23\u0e30\u0e1a\u0e23\u0e21\u0e23\u0e32\u0e0a\u0e19\u0e01 \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e01\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e41\u0e25\u0e49\u0e27\u0e40\u0e2a\u0e23\u0e47\u0e08 \u0e1e\u0e25.\u0e15. \u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c\u0e40\u0e08\u0e49\u0e32\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c\u0e17\u0e34\u0e1e\u0e22\u0e4c\u0e2d\u0e32\u0e20\u0e32 \u0e1c\u0e39\u0e49\u0e41\u0e17\u0e19\u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c \u0e40\u0e2a\u0e14\u0e47\u0e08\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e07\u0e04\u0e4c\u0e1b\u0e23\u0e30\u0e18\u0e32\u0e19\u0e43\u0e19\u0e1e\u0e34\u0e18\u0e35\u0e40\u0e1b\u0e34\u0e14\u0e43\u0e19\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 21 \u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21 \u0e1e.\u0e28.2484</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e1b\u0e35 \u0e1e.\u0e28.2509 \u0e15\u0e36\u0e01\u0e21\u0e2b\u0e34\u0e14\u0e25\u0e0b\u0e36\u0e48\u0e07\u0e21\u0e35\u0e2b\u0e49\u0e2d\u0e07\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e44\u0e14\u0e49 16 \u0e2b\u0e49\u0e2d\u0e07 \u0e41\u0e21\u0e49\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e15\u0e48\u0e2d\u0e40\u0e15\u0e34\u0e21\u0e02\u0e22\u0e32\u0e22\u0e40\u0e1b\u0e47\u0e19 30 \u0e2b\u0e49\u0e2d\u0e07 \u0e01\u0e47\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e1e\u0e2d\u0e41\u0e01\u0e48\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23 \u0e17\u0e32\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04\u0e08\u0e36\u0e07\u0e44\u0e14\u0e49\u0e21\u0e35\u0e01\u0e32\u0e23\u0e01\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e43\u0e2b\u0e21\u0e48\u0e43\u0e2b\u0e49\u0e17\u0e31\u0e19\u0e2a\u0e21\u0e31\u0e22\u0e43\u0e0a\u0e49\u0e41\u0e17\u0e19\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e01\u0e48\u0e32\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e1e\u0e23\u0e30\u0e1a\u0e23\u0e21\u0e23\u0e32\u0e0a\u0e32\u0e19\u0e38\u0e0d\u0e32\u0e15\u0e08\u0e32\u0e01\u0e1e\u0e23\u0e30\u0e1a\u0e32\u0e17\u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e40\u0e08\u0e49\u0e32\u0e2d\u0e22\u0e39\u0e48\u0e2b\u0e31\u0e27\u0e20\u0e39\u0e21\u0e34\u0e1e\u0e25\u0e2d\u0e14\u0e38\u0e25\u0e22\u0e40\u0e14\u0e0a \u0e23\u0e31\u0e0a\u0e01\u0e32\u0e25\u0e17\u0e35\u0e48 9 \u0e42\u0e14\u0e22\u0e17\u0e35\u0e48\u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c\u0e17\u0e48\u0e32\u0e19\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e14\u0e49\u0e27\u0e22\u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e19\u0e32\u0e07\u0e40\u0e08\u0e49\u0e32\u0e1e\u0e23\u0e30\u0e1a\u0e23\u0e21\u0e23\u0e32\u0e0a\u0e34\u0e19\u0e35\u0e19\u0e32\u0e16 \u0e17\u0e23\u0e07\u0e1e\u0e23\u0e30\u0e01\u0e23\u0e38\u0e13\u0e32\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e01\u0e25\u0e49\u0e32\u0e2f \u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e17\u0e32\u0e19\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e17\u0e23\u0e31\u0e1e\u0e22\u0e4c\u0e2a\u0e48\u0e27\u0e19\u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c \u0e08\u0e33\u0e19\u0e27\u0e19 1,000,000 \u0e1a\u0e32\u0e17 \u0e23\u0e48\u0e27\u0e21\u0e43\u0e19\u0e01\u0e32\u0e23\u0e01\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e14\u0e49\u0e27\u0e22 \u0e17\u0e32\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e08\u0e36\u0e07\u0e44\u0e14\u0e49\u0e40\u0e23\u0e34\u0e48\u0e21\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e32\u0e21\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e14\u0e33\u0e23\u0e34\u0e44\u0e27\u0e49</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 10 \u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19 \u0e1e.\u0e28.2532 \u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e40\u0e08\u0e49\u0e32\u0e1e\u0e35\u0e48\u0e19\u0e32\u0e07\u0e40\u0e18\u0e2d\u0e40\u0e08\u0e49\u0e32\u0e1f\u0e49\u0e32\u0e01\u0e31\u0e25\u0e22\u0e32\u0e13\u0e34\u0e27\u0e31\u0e12\u0e19\u0e32 \u0e01\u0e23\u0e21\u0e2b\u0e25\u0e27\u0e07\u0e19\u0e23\u0e32\u0e18\u0e34\u0e27\u0e32\u0e2a\u0e23\u0e32\u0e0a\u0e19\u0e04\u0e23\u0e34\u0e19\u0e17\u0e23\u0e4c \u0e40\u0e2a\u0e14\u0e47\u0e08\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e07\u0e04\u0e4c\u0e1b\u0e23\u0e30\u0e18\u0e32\u0e19\u0e43\u0e19\u0e1e\u0e34\u0e18\u0e35\u0e27\u0e32\u0e07\u0e28\u0e34\u0e25\u0e32\u0e24\u0e01\u0e29\u0e4c\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e21\u0e2b\u0e34\u0e14\u0e25\u0e2b\u0e25\u0e31\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e17\u0e31\u0e49\u0e07\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e17\u0e32\u0e19\u0e40\u0e07\u0e34\u0e19\u0e08\u0e32\u0e01\u0e01\u0e2d\u0e07\u0e17\u0e38\u0e19\u0e01\u0e32\u0e23\u0e01\u0e38\u0e28\u0e25\u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e22\u0e48\u0e32 \u0e08\u0e33\u0e19\u0e27\u0e19 600,000 \u0e1a\u0e32\u0e17 \u0e41\u0e25\u0e30\u0e01\u0e2d\u0e07\u0e17\u0e38\u0e19\u0e01\u0e32\u0e23\u0e01\u0e38\u0e28\u0e25 \u0e01.\u0e27. \u0e2d\u0e35\u0e01 400,000 \u0e1a\u0e32\u0e17 \u0e2a\u0e21\u0e17\u0e1a\u0e43\u0e19\u0e01\u0e32\u0e23\u0e01\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07 \u0e19\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19 \u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e40\u0e17\u0e1e\u0e23\u0e31\u0e15\u0e19\u0e23\u0e32\u0e0a\u0e2a\u0e38\u0e14\u0e32\u0e2f \u0e2a\u0e22\u0e32\u0e21\u0e1a\u0e23\u0e21\u0e23\u0e32\u0e0a\u0e01\u0e38\u0e21\u0e32\u0e23\u0e35 \u0e22\u0e31\u0e07\u0e17\u0e23\u0e07\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e17\u0e32\u0e19\u0e17\u0e23\u0e31\u0e1e\u0e22\u0e4c\u0e2a\u0e48\u0e27\u0e19\u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c\u0e23\u0e48\u0e27\u0e21\u0e2a\u0e21\u0e17\u0e1a\u0e2d\u0e35\u0e01 5,000 \u0e1a\u0e32\u0e17</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 17 \u0e21\u0e35\u0e19\u0e32\u0e04\u0e21 \u0e1e.\u0e28.2535 \u0e1e\u0e23\u0e30\u0e1a\u0e32\u0e17\u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e40\u0e08\u0e49\u0e32\u0e2d\u0e22\u0e39\u0e48\u0e2b\u0e31\u0e27\u0e20\u0e39\u0e21\u0e34\u0e1e\u0e25\u0e2d\u0e14\u0e38\u0e25\u0e22\u0e40\u0e14\u0e0a \u0e40\u0e2a\u0e14\u0e47\u0e08\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e07\u0e04\u0e4c\u0e1b\u0e23\u0e30\u0e18\u0e32\u0e19\u0e43\u0e19\u0e1e\u0e34\u0e18\u0e35\u0e40\u0e1b\u0e34\u0e14\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e21\u0e2b\u0e34\u0e14\u0e25\u0e2b\u0e25\u0e31\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e02\u0e2d\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText32498"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid7474D312_7B1C_438B_41D8_45C657686CCD_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_6739E5AB_72C6_D01C_41D8_02BE994B2454.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1862"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.6,
   "yaw": 22.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_6F8FECA3_76F8_69EF_41CE_F44660F11C45, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.6,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0_HS_0_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 3.16,
   "yaw": 22.93,
   "distance": 50
  }
 ],
 "id": "overlay_6FDB9DC6_76F8_ABA8_41CF_BCD01D2A7FD2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.48,
   "yaw": -27.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7966812F_72C6_D014_41D7_1D6924624506, this.camera_6B5D3383_7B1C_4289_41D4_9890F450BB74); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_6989A46B_76C8_597F_41D6_29EC9147BE97",
   "pitch": -8.06,
   "hfov": 13.48,
   "yaw": -27.01
  }
 ],
 "id": "overlay_6FA6753B_76FB_F8DF_41DA_F4E0C186BE4F",
 "data": {
  "label": "Circle Arrow 02 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.37,
   "yaw": 145.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_797C3658_72C7_503C_41B1_6AA54500EBD4, this.camera_6B23E37B_7B1C_4279_41B1_6616EDD9B3E7); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_698F746B_76C8_597F_41CE_C8040CA9B6DD",
   "pitch": -11.08,
   "hfov": 13.37,
   "yaw": 145.79
  }
 ],
 "id": "overlay_6F74C94B_76F8_A8BF_41BD_9E63EFFDC8FC",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 }
},
{
 "id": "htmlText_6AA41797_76F8_A7A8_41D8_4708BB0E34F4",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText59921"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "htmlText_63BA4B15_76D9_A8AB_41D0_9CC8891FA580",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText26472"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid7461331C_7B1C_43BF_41D8_C77685F4CAD3_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_6A1448ED_7A56_9610_41D3_D2B2CC45FBB4.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1870"
 }
},
{
 "id": "htmlText_6AD4902A_7A51_B610_41D0_B9B2D100CE64",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText9786"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid7469A315_7B1C_4389_41DB_04C27069D414_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_6A1448ED_7A56_9610_41D3_D2B2CC45FBB4.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1866"
 }
},
{
 "id": "htmlText_6FB2B93F_7341_5074_41C4_F6B70432FA87",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText65200"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid746FA316_7B1C_438B_41B8_8B806037A5CC_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_6A1448ED_7A56_9610_41D3_D2B2CC45FBB4.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1867"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": 3.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_6081A5A3_72C2_B00C_41D4_C6BB74D76898, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_1_HS_0_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 0.89,
   "yaw": 3.7,
   "distance": 50
  }
 ],
 "id": "overlay_632DDA2B_72C3_D01C_41D0_38D3A6B552F1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.33,
   "yaw": 119.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_79898CE5_72C2_F014_41C2_54869D6C0D79, this.camera_76DCA449_7B1C_4599_41D4_31E7D5981357); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_562D275F_7343_5034_41C9_55575470F225",
   "pitch": -6.99,
   "hfov": 24.33,
   "yaw": 119.92
  }
 ],
 "id": "overlay_60FD6596_72C1_F034_41D3_298DF997DF3F",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.84,
   "yaw": -108.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7994979A_72C3_503C_41D0_F04DB3A891F6, this.camera_76A0A442_7B1C_458B_41C7_A0D39D21C855); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_562DD75F_7343_5034_41C2_0C3D9D11EAFC",
   "pitch": -13.51,
   "hfov": 23.84,
   "yaw": -108.59
  }
 ],
 "id": "overlay_60642B08_72C2_B01C_41C5_94EE7110B1AC",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "items": [
  {
   "media": "this.album_62E25E26_72C1_5014_41CC_E7DA4463DC85_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.73",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_62E25E26_72C1_5014_41CC_E7DA4463DC85_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.34",
     "class": "PhotoCameraPosition",
     "y": "0.57",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_62E25E26_72C1_5014_41CC_E7DA4463DC85_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.56",
     "class": "PhotoCameraPosition",
     "y": "0.45",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear"
   }
  }
 ],
 "id": "album_62E25E26_72C1_5014_41CC_E7DA4463DC85_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "id": "htmlText_608755A3_72C2_B00C_41D0_7A4687C5967A",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e15\u0e36\u0e01\u0e2b\u0e25\u0e27\u0e07\u0e2d\u0e19\u0e38\u0e2a\u0e32\u0e23\u0e2a\u0e38\u0e19\u0e17\u0e23</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e43\u0e19\u0e1b\u0e35 \u0e1e.\u0e28.2471 \u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e04\u0e2d\u0e23\u0e4c\u0e17\u0e44\u0e14\u0e49\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e15\u0e36\u0e01\u0e2b\u0e25\u0e27\u0e07\u0e2d\u0e19\u0e38\u0e2a\u0e32\u0e23\u0e2a\u0e38\u0e19\u0e17\u0e23 \u0e14\u0e49\u0e27\u0e22\u0e40\u0e07\u0e34\u0e19\u0e1a\u0e23\u0e34\u0e08\u0e32\u0e04\u0e02\u0e2d\u0e07\u0e2b\u0e25\u0e27\u0e07\u0e2d\u0e19\u0e38\u0e2a\u0e32\u0e23\u0e2a\u0e38\u0e19\u0e17\u0e23 \u0e40\u0e1b\u0e47\u0e19\u0e15\u0e36\u0e01\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e04\u0e25\u0e2d\u0e14\u0e1a\u0e38\u0e15\u0e23\u0e41\u0e25\u0e30\u0e14\u0e39\u0e41\u0e25\u0e17\u0e32\u0e23\u0e01 \u0e15\u0e48\u0e2d\u0e21\u0e32\u0e43\u0e19\u0e27\u0e31\u0e19\u0e40\u0e2a\u0e32\u0e23\u0e4c \u0e17\u0e35\u0e48 5 \u0e21\u0e01\u0e23\u0e32\u0e04\u0e21 \u0e1e.\u0e28.2471 \u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e28\u0e23\u0e35\u0e2a\u0e27\u0e23\u0e34\u0e19\u0e17\u0e34\u0e23\u0e32 \u0e1a\u0e23\u0e21\u0e23\u0e32\u0e0a\u0e40\u0e17\u0e27\u0e35 \u0e1e\u0e23\u0e30\u0e1e\u0e31\u0e19\u0e27\u0e31\u0e2a\u0e2a\u0e32\u0e2d\u0e31\u0e22\u0e22\u0e34\u0e01\u0e32\u0e40\u0e08\u0e49\u0e32 \u0e17\u0e23\u0e07\u0e40\u0e2a\u0e14\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e21\u0e32\u0e40\u0e1b\u0e34\u0e14\u0e15\u0e36\u0e01\u0e2a\u0e39\u0e15\u0e34\u0e01\u0e23\u0e23\u0e21 (\u0e15\u0e36\u0e01\u0e2b\u0e25\u0e27\u0e07\u0e2d\u0e19\u0e38\u0e2a\u0e32\u0e23\u0e2a\u0e38\u0e19\u0e17\u0e23)</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText11756"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid7473D30D_7B1C_439E_4184_903B011DA6A5_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_637BF6AC_72C1_F014_41D4_A9D3A311EBAE.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1859"
 }
},
{
 "media": "this.album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D_AlbumPlayList, this.htmltext_7467C31D_7B1C_43B9_41BF_8AC38A318248, this.albumitem_7466431C_7B1C_43BF_41BE_EE02EAD22F63); this.loopAlbum(this.playList_7466C31C_7B1C_43BF_41CE_A50DD2D15C39, 0)",
 "player": "this.viewer_uid7466231C_7B1C_43BF_41DE_6C43B41FF1C0PhotoAlbumPlayer",
 "id": "albumitem_7466431C_7B1C_43BF_41BE_EE02EAD22F63"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.61,
   "yaw": -0.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_660196A1_72C1_700C_41D6_AFC41D89A0A2, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.61,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_1_HS_0_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 2.09,
   "yaw": -0.23,
   "distance": 50
  }
 ],
 "id": "overlay_668040DB_72C1_503D_41C2_0B92E93C3C69",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.59,
   "yaw": 79.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_799A3E71_72C3_500C_41D3_5123086D3056, this.camera_6B111363_7B1C_4389_41CB_ECC7CF783B5C); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_5633075F_7343_5034_41D0_4A9BD06F9242",
   "pitch": -3.97,
   "hfov": 13.59,
   "yaw": 79.22
  }
 ],
 "id": "overlay_66031AA4_72C7_5014_4173_70D0E5630F82",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.5,
   "yaw": 55.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_79FC54BD_72C3_7075_41D6_E4987603A213, this.camera_6B01B36B_7B1C_4399_41BB_E1FAA9AA989B); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_5633B75F_7343_5034_41DB_7A929317D02D",
   "pitch": -1.7,
   "hfov": 24.5,
   "yaw": 55.61
  }
 ],
 "id": "overlay_67F08ADC_72C1_D034_41D1_B7ABF9554FA6",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": -85.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3, this.camera_6B330374_7B1C_438F_41C4_3DA7F6F1AE50); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_5633875F_7343_5034_41B0_D33683E1DF37",
   "pitch": -1.25,
   "hfov": 13.62,
   "yaw": -85.12
  }
 ],
 "id": "overlay_6785DFA5_72C2_D014_41B3_9C1AC3DF0B64",
 "data": {
  "label": "Circle Arrow 02 Left-Up"
 }
},
{
 "id": "htmlText_66A140F0_76C9_D969_41D4_4310C669C04F",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "33%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e31\u0e19\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e48\u0e19 (American Mission Hospital)</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e01\u0e32\u0e23\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e41\u0e1c\u0e19\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e2a\u0e32\u0e18\u0e32\u0e23\u0e13\u0e2a\u0e38\u0e02\u0e44\u0e14\u0e49\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e41\u0e25\u0e30\u0e20\u0e32\u0e04\u0e40\u0e2b\u0e19\u0e37\u0e2d\u0e02\u0e2d\u0e07\u0e2a\u0e22\u0e32\u0e21 \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e1e.\u0e28.2410 \u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e40\u0e1c\u0e22\u0e41\u0e1e\u0e23\u0e48\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e28\u0e32\u0e2a\u0e19\u0e32\u0e02\u0e2d\u0e07\u0e28\u0e32\u0e2a\u0e19\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c \u0e41\u0e14\u0e25\u0e40\u0e19\u0e35\u0e22\u0e25 \u0e41\u0e21\u0e04\u0e01\u0e34\u0e25\u0e27\u0e32\u0e23\u0e35 \u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e19\u0e19\u0e32\u0e23\u0e35\u0e0a\u0e32\u0e27\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e31\u0e19 \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e44\u0e14\u0e49\u0e1e\u0e1a\u0e40\u0e2b\u0e47\u0e19\u0e04\u0e27\u0e32\u0e21\u0e40\u0e08\u0e47\u0e1a\u0e1b\u0e48\u0e27\u0e22\u0e02\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19 \u0e08\u0e36\u0e07\u0e19\u0e33\u0e22\u0e32\u0e41\u0e1c\u0e19\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e19\u0e33\u0e15\u0e34\u0e14\u0e15\u0e31\u0e27\u0e21\u0e32\u0e41\u0e08\u0e01\u0e08\u0e48\u0e32\u0e22 \u0e41\u0e25\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e23\u0e31\u0e01\u0e29\u0e32\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e15\u0e32\u0e21\u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49\u0e1e\u0e37\u0e49\u0e19\u0e10\u0e32\u0e19\u0e17\u0e35\u0e48\u0e21\u0e35\u0e41\u0e25\u0e30\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e41\u0e1c\u0e19\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e43\u0e2b\u0e49\u0e04\u0e13\u0e30\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e31\u0e19\u0e40\u0e1e\u0e23\u0e2a\u0e44\u0e1a\u0e17\u0e35\u0e40\u0e23\u0e35\u0e22\u0e19\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e23\u0e32\u0e1a \u0e0b\u0e36\u0e48\u0e07\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e15\u0e2d\u0e1a\u0e2a\u0e19\u0e2d\u0e07\u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e48\u0e07 \u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e0a\u0e32\u0e23\u0e4c\u0e25 \u0e40\u0e27\u0e2a\u0e25\u0e35\u0e22\u0e4c \u0e27\u0e39\u0e23\u0e41\u0e21\u0e19 \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e41\u0e1c\u0e19\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e04\u0e19\u0e41\u0e23\u0e01\u0e17\u0e35\u0e48\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e17\u0e35\u0e48\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e44\u0e14\u0e49\u0e43\u0e2b\u0e49\u0e01\u0e32\u0e23\u0e23\u0e31\u0e01\u0e29\u0e32\u0e1c\u0e39\u0e49\u0e40\u0e08\u0e47\u0e1a\u0e1b\u0e48\u0e27\u0e22\u0e41\u0e25\u0e30\u0e44\u0e14\u0e49\u0e40\u0e1b\u0e34\u0e14\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48\u0e08\u0e33\u0e2b\u0e19\u0e48\u0e32\u0e22\u0e22\u0e32\u0e41\u0e1c\u0e19\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2415 \u0e2d\u0e22\u0e39\u0e48\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e27\u0e25\u0e32 2 \u0e1b\u0e35 \u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2418 \u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e41\u0e21\u0e40\u0e23\u0e35\u0e22\u0e19 \u0e2d\u0e31\u0e25\u0e1f\u0e2d\u0e19\u0e42\u0e0b \u0e0a\u0e35\u0e04 \u0e44\u0e14\u0e49\u0e40\u0e02\u0e49\u0e32\u0e23\u0e31\u0e1a\u0e0a\u0e48\u0e27\u0e07\u0e07\u0e32\u0e19\u0e15\u0e48\u0e2d\u0e41\u0e25\u0e30\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2428 \u0e44\u0e14\u0e49\u0e25\u0e32\u0e2d\u0e2d\u0e01\u0e44\u0e1b\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e31\u0e27\u0e41\u0e17\u0e19\u0e04\u0e49\u0e32\u0e44\u0e21\u0e49\u0e43\u0e2b\u0e49\u0e01\u0e31\u0e1a\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17\u0e1a\u0e23\u0e34\u0e15\u0e34\u0e0a\u0e1a\u0e2d\u0e23\u0e4c\u0e40\u0e19\u0e35\u0e22\u0e27 \u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2429 \u0e04\u0e13\u0e30\u0e01\u0e23\u0e23\u0e21\u0e01\u0e32\u0e23\u0e01\u0e25\u0e32\u0e07\u0e40\u0e1e\u0e23\u0e2a\u0e44\u0e1a\u0e17\u0e35\u0e40\u0e23\u0e35\u0e22\u0e19\u0e44\u0e14\u0e49\u0e2d\u0e19\u0e38\u0e21\u0e31\u0e15\u0e34\u0e40\u0e07\u0e34\u0e19 10,000 \u0e40\u0e2b\u0e23\u0e35\u0e22\u0e0d\u0e2a\u0e2b\u0e23\u0e31\u0e10\u0e21\u0e32\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e15\u0e48\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e07\u0e34\u0e19\u0e44\u0e21\u0e48\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e1e\u0e2d \u0e04\u0e13\u0e30\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e19\u0e19\u0e32\u0e23\u0e35\u0e43\u0e19\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e02\u0e13\u0e30\u0e19\u0e31\u0e49\u0e19\u0e08\u0e36\u0e07\u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48\u0e02\u0e32\u0e22\u0e22\u0e32\u0e43\u0e2b\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e02\u0e36\u0e49\u0e19\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2430 \u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c \u0e40\u0e2d. \u0e40\u0e2d\u0e47\u0e21. \u0e41\u0e04\u0e23\u0e35\u0e48 \u0e44\u0e14\u0e49\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e31\u0e49\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e02\u0e19\u0e32\u0e14\u0e40\u0e25\u0e47\u0e01\u0e02\u0e36\u0e49\u0e19 \u0e13 \u0e1a\u0e23\u0e34\u0e40\u0e27\u0e13\u0e23\u0e34\u0e21\u0e1d\u0e31\u0e48\u0e07\u0e15\u0e30\u0e27\u0e31\u0e19\u0e15\u0e01\u0e02\u0e2d\u0e07\u0e41\u0e21\u0e48\u0e19\u0e49\u0e33\u0e1b\u0e34\u0e07 (\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e35\u0e48\u0e15\u0e31\u0e49\u0e07\u0e2a\u0e16\u0e32\u0e19\u0e35\u0e01\u0e32\u0e0a\u0e32\u0e14\u0e17\u0e35\u0e48 3) \u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e0a\u0e37\u0e48\u0e2d\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e27\u0e48\u0e32 \u201c\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e31\u0e19\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e48\u0e19\u201d \u0e44\u0e14\u0e49\u0e40\u0e1b\u0e34\u0e14\u0e23\u0e31\u0e01\u0e29\u0e32\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22 \u0e41\u0e25\u0e30\u0e17\u0e33\u0e01\u0e32\u0e23\u0e1c\u0e48\u0e32\u0e15\u0e31\u0e14\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2431 \u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e2b\u0e48\u0e07\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e19\u0e01\u0e33\u0e40\u0e19\u0e34\u0e14\u0e02\u0e2d\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e2b\u0e48\u0e07\u0e17\u0e35\u0e48\u0e2a\u0e2d\u0e07\u0e02\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22\u0e41\u0e25\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e2b\u0e48\u0e07\u0e41\u0e23\u0e01\u0e43\u0e19\u0e25\u0e49\u0e32\u0e19\u0e19\u0e32</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText8835"
 },
 "scrollBarOpacity": 0.5
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid7446F301_7B1C_4389_41D9_0707BA4EF8E0",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "progressLeft": 10,
 "minWidth": 100,
 "playbackBarBorderSize": 2,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "33%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 3100,
 "progressRight": 10,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 2,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "progressBorderRadius": 4,
 "playbackBarBorderColor": "#AAAAAA",
 "playbackBarHeadHeight": 30,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#AAAAAA",
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 20,
 "data": {
  "name": "ViewerArea1845"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.viewer_uid7445D302_7B1C_438B_41C9_63A41C9167F5",
  {
   "horizontalAlign": "left",
   "children": [
    "this.htmltext_7479B30A_7B1C_439B_41DA_8C1C2B10FF3A"
   ],
   "left": 0,
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0.3,
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "right": 0,
   "verticalAlign": "bottom",
   "paddingLeft": 0,
   "borderRadius": 0,
   "scrollBarWidth": 7,
   "minHeight": 20,
   "class": "Container",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "bottom": 0,
   "backgroundColor": [],
   "minWidth": 20,
   "height": "30%",
   "overflow": "scroll",
   "gap": 10,
   "borderSize": 0,
   "paddingBottom": 0,
   "paddingTop": 0,
   "contentOpaque": true,
   "layout": "vertical",
   "backgroundColorDirection": "vertical",
   "shadow": false,
   "data": {
    "name": "Container1848"
   },
   "scrollBarColor": "#FFFFFF",
   "scrollBarOpacity": 0.5
  },
  "this.component_747FC30B_7B1C_439A_41CA_40F85708BF84",
  "this.component_747FE30B_7B1C_439A_41DC_32E792A5CD87"
 ],
 "id": "container_74791309_7B1C_4386_41AF_AB220420E51B",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "backgroundColor": [],
 "minWidth": 20,
 "height": "33%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "Container1847"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "items": [
  {
   "media": "this.album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.74",
     "class": "PhotoCameraPosition",
     "y": "0.67",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear"
   }
  },
  {
   "media": "this.album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.70",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear"
   }
  }
 ],
 "id": "album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.34,
   "yaw": -0.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7968FE87_72C7_7015_41D4_460518DF9780, this.camera_762413E1_7B1C_4289_41D7_E55E22CA87CD); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_698B946B_76C8_597F_41C4_3F5F85AEF926",
   "pitch": -6.83,
   "hfov": 24.34,
   "yaw": -0.23
  }
 ],
 "id": "overlay_6E7E2203_76C8_D8AF_41D5_DA33BA24C4F8",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.99,
   "yaw": 158.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F, this.camera_765D83E9_7B1C_4299_41AD_5AA63B2E5469); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_698B146B_76C8_597F_419C_E2EE02A80350",
   "pitch": -28.33,
   "hfov": 11.99,
   "yaw": 158.66
  }
 ],
 "id": "overlay_6E07DB32_76F8_E8E9_41D5_2A64F4F75641",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.71,
   "yaw": 35.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 30.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_6FAE6505_76F9_B8AB_41D4_3AC47EB2FC7A, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0_HS_2_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 30.69,
   "yaw": 35.93,
   "distance": 50
  }
 ],
 "id": "overlay_6E0ACA26_76F9_E8E9_41CB_24A54CB13E39",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.36,
   "yaw": 1.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_5637175F_7343_5034_41D9_7F5EB5D1B7A8",
   "pitch": -6.54,
   "hfov": 24.36,
   "yaw": 1.13
  }
 ],
 "id": "overlay_64336B9F_7341_7034_4174_637EA89A7F61",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": 85.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_5637B75F_7343_5034_418C_1CC17C98645F",
   "pitch": -0.64,
   "hfov": 13.62,
   "yaw": 85.26
  }
 ],
 "id": "overlay_646BFC7B_7343_50FC_41D8_F396C7F34213",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.49,
   "yaw": 0.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_6B0AB027_7346_B014_41C6_A8F9704E7FFB, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.49,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_1_HS_2_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 7.83,
   "yaw": 0.98,
   "distance": 50
  }
 ],
 "id": "overlay_64DEDE0A_7346_B01C_41B7_C5E76194B057",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.56,
   "yaw": 18.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_6C15BAB7_76F8_A9D7_41DD_184060C7482F, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.56,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0_HS_0_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 5.42,
   "yaw": 18.84,
   "distance": 50
  }
 ],
 "id": "overlay_6F4168A0_76F9_A9E8_41DD_1A4AA435B5B2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.16,
   "yaw": 49.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7971D831_72C6_D00D_41C4_E89BC00D9197, this.camera_76C66458_7B1C_4587_41D3_BC35E4ACE5E9); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_698C046B_76C8_597F_41C6_9BB42C99D875",
   "pitch": -14.87,
   "hfov": 13.16,
   "yaw": 49.39
  }
 ],
 "id": "overlay_6C8C21AE_76F8_7BF8_41B9_F4C885CE58D7",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.96,
   "yaw": -115.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7968FE87_72C7_7015_41D4_460518DF9780, this.camera_76C80452_7B1C_458B_41C6_BC7791CC0DEA); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_698DB46B_76C8_597F_41D0_95AF7A0D815F",
   "pitch": -17.89,
   "hfov": 12.96,
   "yaw": -115.69
  }
 ],
 "id": "overlay_6C4214EE_76F8_D979_41DA_1FAE24347DE5",
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "id": "htmlText_6D5AEE91_76F8_69A8_4190_DEDB6100AC4F",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText60455"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "htmlText_65F7ACC2_7342_B00C_41B0_F550C238E584",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e1a\u0e49\u0e32\u0e19\u0e1e\u0e31\u0e01\u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e40\u0e2d\u0e47\u0e14\u0e27\u0e34\u0e19 \u0e0b\u0e35. \u0e04\u0e2d\u0e23\u0e4c\u0e15 (E. C. Cort Hall)</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13\u0e1b\u0e35\u0e1e.\u0e28.2468 \u0e40\u0e1b\u0e47\u0e19\u0e17\u0e31\u0e49\u0e07\u0e17\u0e35\u0e48\u0e1e\u0e31\u0e01\u0e41\u0e25\u0e30\u0e17\u0e35\u0e48\u0e17\u0e33\u0e07\u0e32\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27\u0e02\u0e2d\u0e07\u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e40\u0e2d\u0e47\u0e14\u0e27\u0e34\u0e19 \u0e0b\u0e35. \u0e04\u0e2d\u0e23\u0e4c\u0e15\u0e41\u0e25\u0e30\u0e40\u0e04\u0e22\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e35\u0e48\u0e1e\u0e31\u0e01\u0e02\u0e2d\u0e07\u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e21\u0e2b\u0e34\u0e15\u0e25\u0e32\u0e18\u0e34\u0e40\u0e1a\u0e28\u0e23\u0e2d\u0e14\u0e38\u0e25\u0e22\u0e40\u0e14\u0e0a\u0e27\u0e34\u0e01\u0e23\u0e21\u0e1e\u0e23\u0e30\u0e1a\u0e23\u0e21\u0e23\u0e32\u0e0a\u0e0a\u0e19\u0e01 \u0e01\u0e23\u0e21\u0e2b\u0e25\u0e27\u0e07\u0e2a\u0e07\u0e02\u0e25\u0e32\u0e19\u0e04\u0e23\u0e34\u0e19\u0e17\u0e23\u0e4c \u0e02\u0e13\u0e30\u0e17\u0e23\u0e07\u0e07\u0e32\u0e19\u0e17\u0e35\u0e48\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2472 \u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e1e\u0e34\u0e1e\u0e34\u0e18\u0e20\u0e31\u0e13\u0e11\u0e4c\u0e2b\u0e21\u0e2d\u0e40\u0e08\u0e49\u0e32\u0e1f\u0e49\u0e32 \u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText39002"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid74752313_7B1C_4389_41CA_AD9EBE7DF9E2_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_649ECF02_734E_B00C_4194_A7D7EAD69B95.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1863"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.56,
   "yaw": -80.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_796B5FDC_72C7_5034_41D7_43EE36561E31, this.camera_76EC6469_7B1C_4599_41BB_3FBA1723D895); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_69B1E46B_76C8_597F_41D9_984D8400BED8",
   "pitch": 5.42,
   "hfov": 13.56,
   "yaw": -80.44
  }
 ],
 "id": "overlay_6431F942_76D8_68A9_41C9_50E4AE29D641",
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.77,
   "yaw": 123.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7975D71A_72C7_703C_41D7_F92A481EDED9, this.camera_751FB470_7B1C_4587_41C9_37A438DF495C); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_69B1046B_76C8_597F_41C1_DE7A6C355522",
   "pitch": -20.32,
   "hfov": 12.77,
   "yaw": 123.71
  }
 ],
 "id": "overlay_65944BAA_76D8_6FF8_41BC_94A27C8DE08B",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.59,
   "yaw": 8.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_62350E41_76D9_A8AB_41C1_DA8B7EC0BF69, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.59,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0_HS_2_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 3.9,
   "yaw": 8.08,
   "distance": 50
  }
 ],
 "id": "overlay_65AB43BA_76D8_BFD9_41C1_0C89D076621C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 192,
  "x": 221.84,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_63E60E9C_7363_AB30_41DA_FD566A62AC2A_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 117.23,
  "offsetY": 0,
  "height": 192,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 221.75,
  "y": 117.21,
  "width": 192,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_63E60E9C_7363_AB30_41DA_FD566A62AC2A_HS_0.png",
     "width": 192,
     "class": "ImageResourceLevel",
     "height": 192
    }
   ]
  },
  "height": 192
 },
 "areas": [
  {
   "click": "this.setOverlayBehaviour(this.overlay_63BBFE95_72C1_7034_41C7_2CE053BDE650, this.panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3, 'triggerClick')",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_63EA5775_7366_59F0_41C0_9252936E984B",
 "data": {
  "label": "Image"
 }
},
{
 "id": "htmlText_6480B34D_72C1_B014_4146_E532DF5B480D",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e15\u0e36\u0e01 F</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e15\u0e36\u0e01 F \u0e2b\u0e23\u0e37\u0e2d Foreign Ward \u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e01\u0e48\u0e2d\u0e2d\u0e34\u0e10 2 \u0e0a\u0e31\u0e49\u0e19 \u0e0a\u0e31\u0e49\u0e19\u0e25\u0e48\u0e32\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e49\u0e2d\u0e07\u0e1e\u0e34\u0e40\u0e28\u0e29 2 \u0e2b\u0e49\u0e2d\u0e07 \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e17\u0e35\u0e48\u0e21\u0e35\u0e10\u0e32\u0e19\u0e30\u0e14\u0e35\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19 \u0e0a\u0e31\u0e49\u0e19\u0e1a\u0e19\u0e21\u0e35\u0e2b\u0e49\u0e2d\u0e07\u0e43\u0e2b\u0e0d\u0e48 2 \u0e2b\u0e49\u0e2d\u0e07 \u0e08\u0e31\u0e14\u0e44\u0e27\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e02\u0e2d\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 \u0e0b\u0e36\u0e48\u0e07\u0e43\u0e19\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e15\u0e36\u0e01\u0e19\u0e35\u0e49\u0e16\u0e39\u0e01\u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e2a\u0e33\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e02\u0e2d\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText36837"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "htmlText_636871AD_72C1_7014_41C8_CCEF38C19270",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "33%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04 (McCormick Hospital)</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2432 \u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e40\u0e08\u0e21\u0e2a\u0e4c \u0e14\u0e31\u0e1a\u0e1a\u0e25\u0e34\u0e27. \u0e41\u0e21\u0e04\u0e40\u0e04\u0e19 \u0e1c\u0e39\u0e49\u0e21\u0e35\u0e1a\u0e17\u0e1a\u0e32\u0e17\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e43\u0e19\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e14\u0e49\u0e32\u0e19\u0e01\u0e32\u0e23\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e2a\u0e32\u0e18\u0e32\u0e23\u0e13\u0e2a\u0e38\u0e02\u0e44\u0e14\u0e49\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32\u0e23\u0e31\u0e1a\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e15\u0e48\u0e2d \u0e17\u0e48\u0e32\u0e19\u0e44\u0e14\u0e49\u0e17\u0e33\u0e01\u0e32\u0e23\u0e1c\u0e25\u0e34\u0e15\u0e2b\u0e19\u0e2d\u0e07\u0e1d\u0e35 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e0a\u0e49\u0e17\u0e33\u0e01\u0e32\u0e23\u0e1b\u0e25\u0e39\u0e01\u0e1d\u0e35\u0e43\u0e2b\u0e49\u0e41\u0e01\u0e48\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19\u0e0a\u0e32\u0e27\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e1b\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19\u0e42\u0e23\u0e04\u0e1d\u0e35\u0e14\u0e32\u0e29 \u0e41\u0e25\u0e30\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2449 \u0e44\u0e14\u0e49\u0e1c\u0e25\u0e34\u0e15\u0e22\u0e32\u0e40\u0e21\u0e47\u0e14\u0e04\u0e27\u0e34\u0e19\u0e34\u0e19\u0e08\u0e32\u0e01\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e31\u0e01\u0e23\u0e1c\u0e25\u0e34\u0e15\u0e22\u0e32\u0e40\u0e21\u0e47\u0e14\u0e08\u0e32\u0e01\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e2a\u0e2b\u0e23\u0e31\u0e10\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e32\u0e17\u0e35\u0e48\u0e19\u0e33\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32 \u0e40\u0e23\u0e35\u0e22\u0e01\u0e01\u0e31\u0e19\u0e27\u0e48\u0e32 \u0e22\u0e32 \u0e2d\u0e21. \u0e22\u0e48\u0e2d\u0e21\u0e32\u0e08\u0e32\u0e01\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e31\u0e19\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e48\u0e19 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e01\u0e29\u0e32\u0e42\u0e23\u0e04\u0e44\u0e02\u0e49\u0e21\u0e32\u0e25\u0e32\u0e40\u0e23\u0e35\u0e22 </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e1b\u0e35\u0e1e.\u0e28.2458 \u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e40\u0e2d\u0e47\u0e14\u0e27\u0e34\u0e19 \u0e0b\u0e35. \u0e04\u0e2d\u0e23\u0e4c\u0e15 \u0e1c\u0e39\u0e49\u0e27\u0e32\u0e07\u0e23\u0e32\u0e01\u0e10\u0e32\u0e19\u0e27\u0e34\u0e0a\u0e32\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e41\u0e1c\u0e19\u0e43\u0e2b\u0e21\u0e48 \u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e0a\u0e33\u0e19\u0e32\u0e0d\u0e17\u0e32\u0e07\u0e22\u0e32 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e27\u0e34\u0e19\u0e34\u0e08\u0e09\u0e31\u0e22\u0e42\u0e23\u0e04 \u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e21\u0e32\u0e16\u0e36\u0e07\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e44\u0e14\u0e49\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e01\u0e32\u0e23\u0e41\u0e1e\u0e17\u0e22\u0e4c \u0e01\u0e32\u0e23\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e2a\u0e32\u0e18\u0e32\u0e23\u0e13\u0e2a\u0e38\u0e02\u0e04\u0e27\u0e1a\u0e04\u0e39\u0e48\u0e44\u0e1b\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 \u0e0b\u0e36\u0e48\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e31\u0e19\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e48\u0e19\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e16\u0e37\u0e2d\u0e44\u0e27\u0e49\u0e27\u0e32\u0e07\u0e43\u0e08\u0e08\u0e32\u0e01\u0e0a\u0e32\u0e27\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e21\u0e32\u0e01 \u0e08\u0e19\u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e40\u0e2d\u0e47\u0e14\u0e27\u0e34\u0e19 \u0e0b\u0e35. \u0e04\u0e2d\u0e23\u0e4c\u0e15\u0e40\u0e2b\u0e47\u0e19\u0e27\u0e48\u0e32\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e04\u0e31\u0e1a\u0e41\u0e04\u0e1a \u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e02\u0e22\u0e32\u0e22\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e02\u0e19\u0e32\u0e14\u0e43\u0e2b\u0e0d\u0e48\u0e44\u0e14\u0e49 \u0e08\u0e36\u0e07\u0e0b\u0e37\u0e49\u0e2d\u0e17\u0e35\u0e48\u0e14\u0e34\u0e19\u0e1a\u0e23\u0e34\u0e40\u0e27\u0e13\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e35\u0e48\u0e15\u0e31\u0e49\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04\u0e43\u0e19\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e41\u0e25\u0e49\u0e27\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e43\u0e2b\u0e21\u0e48 \u0e42\u0e14\u0e22\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e40\u0e07\u0e34\u0e19\u0e1a\u0e23\u0e34\u0e08\u0e32\u0e04\u0e08\u0e32\u0e01\u0e21\u0e34\u0e2a\u0e0b\u0e34\u0e2a\u0e41\u0e19\u0e19\u0e0b\u0e35 \u0e1f\u0e32\u0e27\u0e40\u0e25\u0e2d\u0e23\u0e4c \u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04 \u0e41\u0e25\u0e30\u0e15\u0e31\u0e49\u0e07\u0e0a\u0e37\u0e48\u0e2d\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e15\u0e32\u0e21\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e1a\u0e23\u0e34\u0e08\u0e32\u0e04\u0e40\u0e07\u0e34\u0e19 \u0e40\u0e23\u0e34\u0e48\u0e21\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2463 \u0e41\u0e25\u0e30\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2467 \u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e14\u0e49\u0e27\u0e22\u0e2d\u0e32\u0e04\u0e32\u0e23 4 \u0e2b\u0e25\u0e31\u0e07\u0e41\u0e23\u0e01 \u0e04\u0e37\u0e2d \u0e2d\u0e32\u0e04\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e19\u0e2d\u0e01 (\u0e15\u0e36\u0e01\u0e1c\u0e48\u0e32\u0e15\u0e31\u0e14 ) \u0e2d\u0e32\u0e04\u0e32\u0e23 AB (\u0e15\u0e36\u0e01\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e43\u0e19) \u0e2d\u0e32\u0e04\u0e32\u0e23\u0e42\u0e20\u0e0a\u0e19\u0e32\u0e01\u0e32\u0e23\u0e41\u0e25\u0e30\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e1e\u0e34\u0e40\u0e28\u0e29 (\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e16\u0e39\u0e01\u0e23\u0e37\u0e49\u0e2d\u0e16\u0e2d\u0e19\u0e41\u0e25\u0e30\u0e16\u0e39\u0e01\u0e41\u0e17\u0e19\u0e17\u0e35\u0e48\u0e14\u0e49\u0e27\u0e22\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e43\u0e2b\u0e21\u0e48) \u0e41\u0e25\u0e30\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 13 \u0e21\u0e01\u0e23\u0e32\u0e04\u0e21 \u0e1e.\u0e28.2467 \u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e40\u0e08\u0e49\u0e32\u0e1f\u0e49\u0e32\u0e21\u0e2b\u0e34\u0e14\u0e25\u0e2d\u0e14\u0e38\u0e25\u0e22\u0e40\u0e14\u0e0a \u0e01\u0e23\u0e21\u0e2b\u0e25\u0e27\u0e07\u0e2a\u0e07\u0e02\u0e25\u0e32\u0e19\u0e04\u0e23\u0e34\u0e19\u0e17\u0e23\u0e4c \u0e40\u0e2a\u0e14\u0e47\u0e08\u0e21\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e07\u0e04\u0e4c\u0e1b\u0e23\u0e30\u0e18\u0e32\u0e19\u0e43\u0e19\u0e1e\u0e34\u0e18\u0e35\u0e40\u0e1b\u0e34\u0e14\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04 \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e2b\u0e21\u0e48\u0e2d\u0e21\u0e2a\u0e31\u0e07\u0e27\u0e32\u0e25\u0e22\u0e4c \u0e2a\u0e07\u0e02\u0e25\u0e32 \u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e17\u0e35\u0e48\u0e17\u0e23\u0e07\u0e01\u0e23\u0e30\u0e17\u0e33\u0e1e\u0e34\u0e18\u0e35\u0e40\u0e1b\u0e34\u0e14\u0e41\u0e25\u0e49\u0e27\u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c\u0e44\u0e14\u0e49\u0e40\u0e2a\u0e14\u0e47\u0e08\u0e17\u0e2d\u0e14\u0e1e\u0e23\u0e30\u0e40\u0e19\u0e15\u0e23\u0e01\u0e34\u0e08\u0e01\u0e32\u0e23\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e17\u0e31\u0e48\u0e27\u0e41\u0e25\u0e49\u0e27\u0e08\u0e36\u0e07\u0e23\u0e31\u0e1a\u0e2a\u0e31\u0e48\u0e07\u0e27\u0e48\u0e32 \u201c\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e0d\u0e48\u0e22\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 \u0e04\u0e37\u0e2d\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e36\u0e49\u0e19\u201d \u0e40\u0e27\u0e25\u0e32\u0e19\u0e31\u0e49\u0e19\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e0a\u0e32\u0e27\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e31\u0e19\u0e21\u0e35\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c \u0e2d\u0e35 \u0e0b\u0e35 \u0e04\u0e2d\u0e23\u0e4c\u0e15 \u0e04\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27\u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c\u0e08\u0e36\u0e07\u0e17\u0e23\u0e07\u0e23\u0e31\u0e1a\u0e2a\u0e31\u0e48\u0e07\u0e27\u0e48\u0e32\u0e08\u0e30\u0e17\u0e23\u0e07\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e17\u0e32\u0e19\u0e04\u0e48\u0e32\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e41\u0e25\u0e30\u0e40\u0e07\u0e34\u0e19\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e43\u0e2b\u0e49\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e04\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07 \u0e43\u0e19\u0e1b\u0e35\u0e15\u0e48\u0e2d\u0e21\u0e32\u0e08\u0e36\u0e07\u0e44\u0e14\u0e49\u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c \u0e40\u0e2e\u0e19\u0e23\u0e35\u0e48 \u0e2d\u0e32\u0e23\u0e4c \u0e42\u0e2d\u0e44\u0e1a\u0e23\u0e2d\u0e31\u0e19 \u0e21\u0e32\u0e23\u0e48\u0e27\u0e21\u0e17\u0e33\u0e07\u0e32\u0e19\u0e43\u0e19\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e1b\u0e35\u0e1e.\u0e28.2472 \u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e40\u0e08\u0e49\u0e32\u0e1a\u0e23\u0e21\u0e27\u0e07\u0e28\u0e4c\u0e40\u0e18\u0e2d\u0e40\u0e08\u0e49\u0e32\u0e1f\u0e49\u0e32\u0e1a\u0e23\u0e34\u0e1e\u0e31\u0e15\u0e23\u0e2a\u0e38\u0e02\u0e38\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e38\u0e4c \u0e01\u0e23\u0e21\u0e1e\u0e23\u0e30\u0e19\u0e04\u0e23\u0e2a\u0e27\u0e23\u0e23\u0e04\u0e4c\u0e27\u0e23\u0e1e\u0e34\u0e19\u0e34\u0e08\u0e40\u0e2a\u0e14\u0e47\u0e08\u0e21\u0e32\u0e40\u0e1b\u0e34\u0e14\u0e15\u0e36\u0e01\u0e2d\u0e32\u0e04\u0e32\u0e23 \u0e13 \u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e41\u0e25\u0e30\u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e40\u0e08\u0e49\u0e32\u0e1f\u0e49\u0e32\u0e21\u0e2b\u0e34\u0e14\u0e25\u0e2d\u0e14\u0e38\u0e25\u0e22\u0e40\u0e14\u0e0a \u0e01\u0e23\u0e21\u0e2b\u0e25\u0e27\u0e07\u0e2a\u0e07\u0e02\u0e25\u0e32\u0e19\u0e04\u0e23\u0e34\u0e19\u0e17\u0e23\u0e4c \u0e40\u0e2a\u0e14\u0e47\u0e08\u0e21\u0e32\u0e17\u0e23\u0e07\u0e07\u0e32\u0e19\u0e41\u0e1e\u0e17\u0e22\u0e4c \u0e41\u0e25\u0e30\u0e1b\u0e23\u0e30\u0e17\u0e31\u0e1a\u0e17\u0e35\u0e48\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e27\u0e25\u0e32\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 3 \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c \u0e41\u0e25\u0e49\u0e27\u0e40\u0e2a\u0e14\u0e47\u0e08\u0e01\u0e25\u0e31\u0e1a\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e48\u0e27\u0e21\u0e43\u0e19\u0e07\u0e32\u0e19\u0e16\u0e27\u0e32\u0e22\u0e1e\u0e23\u0e30\u0e40\u0e1e\u0e25\u0e34\u0e07\u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e01\u0e23\u0e21\u0e1e\u0e23\u0e30\u0e22\u0e32\u0e20\u0e32\u0e13\u0e38\u0e20\u0e31\u0e13\u0e11\u0e4c\u0e27\u0e23\u0e40\u0e14\u0e0a \u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e01\u0e34\u0e08 \u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c\u0e44\u0e14\u0e49\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e17\u0e32\u0e19\u0e17\u0e23\u0e31\u0e1e\u0e22\u0e4c\u0e2a\u0e48\u0e27\u0e19\u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c \u0e08\u0e33\u0e19\u0e27\u0e19 3,000 \u0e40\u0e2b\u0e23\u0e35\u0e22\u0e0d\u0e2a\u0e2b\u0e23\u0e31\u0e10 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e08\u0e31\u0e14\u0e0b\u0e37\u0e49\u0e2d\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07 X-rays \u0e02\u0e19\u0e32\u0e14 25 mA. \u0e43\u0e2b\u0e49\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 \u0e0b\u0e36\u0e48\u0e07\u0e19\u0e31\u0e1a\u0e40\u0e1b\u0e47\u0e19 X-rays \u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e41\u0e23\u0e01\u0e02\u0e2d\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 \u0e41\u0e25\u0e30\u0e21\u0e35\u0e1e\u0e23\u0e30\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e08\u0e30\u0e40\u0e2a\u0e14\u0e47\u0e08\u0e01\u0e25\u0e31\u0e1a\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e35\u0e01 \u0e41\u0e15\u0e48\u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e47\u0e21\u0e34\u0e44\u0e14\u0e49\u0e40\u0e2a\u0e14\u0e47\u0e08\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e2d\u0e35\u0e01 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e17\u0e23\u0e07\u0e1b\u0e23\u0e30\u0e0a\u0e27\u0e23\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e27\u0e25\u0e32\u0e19\u0e32\u0e19\u0e08\u0e19\u0e2a\u0e34\u0e49\u0e19\u0e1e\u0e23\u0e30\u0e0a\u0e19\u0e21\u0e4c\u0e43\u0e19\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19\u0e1b\u0e35\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e1b\u0e35\u0e1e.\u0e28.2485 \u0e23\u0e31\u0e10\u0e1a\u0e32\u0e25\u0e44\u0e17\u0e22\u0e44\u0e14\u0e49\u0e22\u0e36\u0e14\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e0a\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e17\u0e2b\u0e32\u0e23\u0e43\u0e19\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e2a\u0e07\u0e04\u0e23\u0e32\u0e21\u0e42\u0e25\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e17\u0e35\u0e48 2 \u0e42\u0e14\u0e22\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e40\u0e2a\u0e23\u0e35\u0e40\u0e23\u0e34\u0e07\u0e24\u0e17\u0e18\u0e34\u0e4c \u0e15\u0e48\u0e2d\u0e21\u0e32\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2489 \u0e19\u0e32\u0e22\u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e40\u0e2d\u0e47\u0e14\u0e27\u0e34\u0e19 \u0e0b\u0e35. \u0e04\u0e2d\u0e23\u0e4c\u0e15 \u0e44\u0e14\u0e49\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e23\u0e31\u0e1a\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e1c\u0e39\u0e49\u0e2d\u0e33\u0e19\u0e27\u0e22\u0e01\u0e32\u0e23\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e2b\u0e19\u0e36\u0e48\u0e07 \u0e08\u0e19\u0e01\u0e23\u0e30\u0e17\u0e31\u0e48\u0e07\u0e40\u0e01\u0e29\u0e35\u0e22\u0e13\u0e2d\u0e32\u0e22\u0e38 \u0e08\u0e36\u0e07\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e01\u0e25\u0e31\u0e1a\u0e2a\u0e2b\u0e23\u0e31\u0e10\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e32\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2492 \u0e41\u0e25\u0e30\u0e43\u0e19\u0e1b\u0e35\u0e1e.\u0e28.2500 \u0e04\u0e13\u0e30\u0e2d\u0e40\u0e21\u0e23\u0e34\u0e01\u0e31\u0e19\u0e40\u0e1e\u0e23\u0e2a\u0e44\u0e1a\u0e17\u0e35\u0e40\u0e23\u0e35\u0e22\u0e19\u0e21\u0e34\u0e0a\u0e0a\u0e31\u0e48\u0e19\u0e44\u0e14\u0e49\u0e21\u0e2d\u0e1a\u0e01\u0e34\u0e08\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e49\u0e2d\u0e22\u0e39\u0e48\u0e20\u0e32\u0e22\u0e43\u0e15\u0e49\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23\u0e02\u0e2d\u0e07\u0e04\u0e19\u0e44\u0e17\u0e22\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19\u0e08\u0e19\u0e16\u0e36\u0e07\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19 \u0e42\u0e14\u0e22\u0e21\u0e35\u0e21\u0e39\u0e25\u0e19\u0e34\u0e18\u0e34\u0e41\u0e2b\u0e48\u0e07\u0e2a\u0e20\u0e32\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e08\u0e31\u0e01\u0e23\u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText9307"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.viewer_uid747C530B_7B1C_439A_41D2_C2B442BF1BE6",
  {
   "horizontalAlign": "left",
   "children": [
    "this.htmltext_747D130B_7B1C_4399_415F_C2DC39E97675"
   ],
   "left": 0,
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0.3,
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "right": 0,
   "verticalAlign": "bottom",
   "paddingLeft": 0,
   "borderRadius": 0,
   "scrollBarWidth": 7,
   "minHeight": 20,
   "class": "Container",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "bottom": 0,
   "backgroundColor": [],
   "minWidth": 20,
   "height": "30%",
   "overflow": "scroll",
   "gap": 10,
   "borderSize": 0,
   "paddingBottom": 0,
   "paddingTop": 0,
   "contentOpaque": true,
   "layout": "vertical",
   "backgroundColorDirection": "vertical",
   "shadow": false,
   "data": {
    "name": "Container1854"
   },
   "scrollBarColor": "#FFFFFF",
   "scrollBarOpacity": 0.5
  },
  "this.component_7472B30B_7B1C_4399_41D6_80B2D0DE7956",
  "this.component_7472A30B_7B1C_4399_41D3_3DF722F2455D"
 ],
 "id": "container_747DA30B_7B1C_4399_41DA_0ED148FB8221",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "backgroundColor": [],
 "minWidth": 20,
 "height": "33%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "Container1853"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid7472030B_7B1C_4399_41B4_899E14DECA4F",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "progressLeft": 10,
 "minWidth": 100,
 "playbackBarBorderSize": 2,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "33%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 3100,
 "progressRight": 10,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 2,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "progressBorderRadius": 4,
 "playbackBarBorderColor": "#AAAAAA",
 "playbackBarHeadHeight": 30,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#AAAAAA",
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 20,
 "data": {
  "name": "ViewerArea1858"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.71,
   "yaw": -12.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7994979A_72C3_503C_41D0_F04DB3A891F6, this.camera_74F75353_7B1C_4389_41C2_A062128E139F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_57DBC74F_7343_5014_41A7_D78237DD72DA",
   "pitch": -9.26,
   "hfov": 19.71,
   "yaw": -12.51
  }
 ],
 "id": "overlay_6272E944_72C1_B014_41DB_23878A4062BC",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.3,
   "yaw": 22.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 12.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_636E41AD_72C1_7014_41D0_0E107010DCDD, null, true); this.playList_747C030B_7B1C_439A_41D8_FA6B86486A40.set('selectedIndex', 0); ; this.playList_7472F30B_7B1C_4399_41D1_1801BB553356.set('selectedIndex', 0); ; this.viewer_uid7472030B_7B1C_4399_41B4_899E14DECA4FVideoPlayer.play(); ",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.3,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_1_HS_1_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 12.37,
   "yaw": 22.02,
   "distance": 50
  }
 ],
 "id": "overlay_63BBFE95_72C1_7034_41C7_2CE053BDE650",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": 117.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7E814EAC_72C2_D014_41C2_B18388E38053, this.camera_74E7B35B_7B1C_43B9_4183_DB1DBAE0A194); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_5628475F_7343_5034_41D0_FA5C90C62CD0",
   "pitch": 0.73,
   "hfov": 13.62,
   "yaw": 117.65
  }
 ],
 "id": "overlay_676B0CD4_72C1_5034_41A2_62AFFBC1458E",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.61,
   "yaw": 2.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_63CFA829_76C7_A8FB_41C6_31F99A879F9E, null, false); this.playList_7466C31C_7B1C_43BF_41CE_A50DD2D15C39.set('selectedIndex', 0); ",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.61,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0_HS_0_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 1.79,
   "yaw": 2.79,
   "distance": 50
  }
 ],
 "id": "overlay_6333580C_76D9_A8B9_41C4_1335A823090C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.37,
   "yaw": 143.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB, this.camera_7538C480_7B1C_4687_41D7_A1FEF844E411); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_69B6546B_76C8_597F_41BB_B59D5353CE9D",
   "pitch": 11.01,
   "hfov": 13.37,
   "yaw": 143.68
  }
 ],
 "id": "overlay_63F5CBC8_76D8_EFB9_41A5_C5427BCCFBA5",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 55.07,
  "x": 113.26,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_62B90146_7365_B910_41C4_ED6B653F29A2_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 391.01,
  "offsetY": 0,
  "height": 55.07,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 113.26,
  "y": 391.01,
  "width": 55.07,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_62B90146_7365_B910_41C4_ED6B653F29A2_HS_0.png",
     "width": 55,
     "class": "ImageResourceLevel",
     "height": 55
    }
   ]
  },
  "height": 55.07
 },
 "areas": [
  {
   "click": "this.setOverlayBehaviour(this.overlay_65C8873B_7341_F07C_4193_90CDF733916C, this.panorama_7E814EAC_72C2_D014_41C2_B18388E38053, 'triggerClick')",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_63CB76FC_7362_58F0_41D5_8C83006A3D95",
 "data": {
  "label": "Image"
 }
},
{
 "id": "htmlText_637794FD_76C8_D958_41C6_556948B135BD",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText32052"
 },
 "scrollBarOpacity": 0.5
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": -3.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_6482F34D_72C1_B014_41D8_3B83CA44BDA5, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_1_HS_0_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": -0.02,
   "yaw": -3.56,
   "distance": 50
  }
 ],
 "id": "overlay_64610F34_72C3_D074_41BD_D09693A6D53C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.54,
   "yaw": -78.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_799A3E71_72C3_500C_41D3_5123086D3056, this.camera_74C5334B_7B1C_4399_41CB_53EAE7B71D7D); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_5631975F_7343_5034_41D9_03B39FC95788",
   "pitch": -6.08,
   "hfov": 13.54,
   "yaw": -78.47
  }
 ],
 "id": "overlay_6438B7DD_72C2_F034_41D3_0D5EF83BAB61",
 "data": {
  "label": "Circle Arrow 02 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.61,
   "yaw": -81.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7994979A_72C3_503C_41D0_F04DB3A891F6, this.camera_76B5243A_7B1C_45FB_41DA_91E7A5F45CC9); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_5630375F_7343_5034_41D6_CF1404D3F82F",
   "pitch": -1.84,
   "hfov": 13.61,
   "yaw": -81.81
  }
 ],
 "id": "overlay_674333E4_72CF_D014_41BF_5C1AD9EF1FAB",
 "data": {
  "label": "Circle Arrow 02 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.61,
   "yaw": 78.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6, this.camera_76BEF432_7B1C_458B_41DD_B25C5F79B00B); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_5630D75F_7343_5034_41D9_36BAE1D7D890",
   "pitch": -2.45,
   "hfov": 13.61,
   "yaw": 78.61
  }
 ],
 "id": "overlay_67283E0D_72CE_D014_41C0_A6A882C2D2BA",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": 1.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_64FCC360_72C1_F00C_41D3_C5C154B42654, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_1_HS_2_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 0.57,
   "yaw": 1.73,
   "distance": 50
  }
 ],
 "id": "overlay_672A6EE3_72C1_500C_4198_95DF370F8E53",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.82,
   "yaw": 4.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.openLink('http://google.com', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_5637775F_7343_5034_41AF_3909FDC8DD50",
   "pitch": -8.37,
   "hfov": 15.82,
   "yaw": 4.05
  }
 ],
 "id": "overlay_64FCCA92_7346_B00C_41A4_8CAF7A9C5FE7",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.6,
   "yaw": 148.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_5637475F_7343_5034_40A3_7E5DE5FDA800",
   "pitch": -3.36,
   "hfov": 13.6,
   "yaw": 148.68
  }
 ],
 "id": "overlay_6B0C7139_7342_D07D_41C4_081860404FE0",
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.58,
   "yaw": -146.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E, this.camera_767CB404_7B1C_458F_41D5_55DF87EED503); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_5637F75F_7343_5034_41D6_FB10D693A378",
   "pitch": -4.56,
   "hfov": 13.58,
   "yaw": -146.27
  }
 ],
 "id": "overlay_6B1A002E_7343_D014_41D9_651ADDFECAA0",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "id": "htmlText_6F91CCA3_76F8_69EF_41D2_D9B4F4C0FEDA",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText48131"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid7499A31F_7B1C_43B9_41B8_E6AC30737566_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_6EBB1E66_7A71_8A10_417E_561685A16EEA.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1879"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.57,
   "yaw": 6.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_65E9ECC2_7342_B00C_41CB_A897A0BADCDA, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_1_HS_0_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 4.81,
   "yaw": 6.42,
   "distance": 50
  }
 ],
 "id": "overlay_65C8873B_7341_F07C_4193_90CDF733916C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.23,
   "yaw": 6.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.openLink('https://my.matterport.com/models/K4gD46b7PHG', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_5636975F_7343_5034_41C8_32EDA2051B91",
   "pitch": -8.81,
   "hfov": 24.23,
   "yaw": 6.13
  }
 ],
 "id": "overlay_640BB3E9_7343_501C_41B3_39C52F312B54",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.47,
   "yaw": -83.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3, this.camera_7680142A_7B1C_459B_41D3_4113B32041B4); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_5637675F_7343_5034_41D6_49DB8230674A",
   "pitch": -3.52,
   "hfov": 24.47,
   "yaw": -83.92
  }
 ],
 "id": "overlay_64180C4C_734F_D014_41DC_0A8238F77103",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.61,
   "yaw": 88.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.openLink('https://my.matterport.com/models/WBQceJJAvhQ', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_6A900A63_7AD3_D44D_41B0_E13374F73CEE",
   "pitch": -1.54,
   "hfov": 13.61,
   "yaw": 88.3
  }
 ],
 "id": "overlay_6E1FCB52_7A77_8A30_41D1_BA415F8AF9E8",
 "data": {
  "label": "Circle Arrow 02 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": -149.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_796B5FDC_72C7_5034_41D7_43EE36561E31, this.camera_762B53D1_7B1C_4289_41AF_6A0952C13E48); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_69B6246B_76C8_597F_41D0_48AF758E1A41",
   "pitch": -0.34,
   "hfov": 13.62,
   "yaw": -149.45
  }
 ],
 "id": "overlay_6290C103_76D8_78A8_4199_72479520F1D2",
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.51,
   "yaw": -97.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_79699415_72C6_B034_41D9_C19923ABFD5E, this.camera_762D53D9_7B1C_42B9_41DA_2CD275E13C71); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_69B6746B_76C8_597F_41D6_70B39AFF2525",
   "pitch": -1.38,
   "hfov": 24.51,
   "yaw": -97.24
  }
 ],
 "id": "overlay_62A5E0ED_76D8_797B_41D3_011AFA7FDE92",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.59,
   "yaw": 93.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_69B7E46B_76C8_597F_41DD_8D917C118A33",
   "pitch": 3.9,
   "hfov": 13.59,
   "yaw": 93.29
  }
 ],
 "id": "overlay_62649814_76D8_68A9_41D5_C76D444FCFA1",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": -6.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_63BD8B11_76D9_A8AB_41D6_1FD1273ECEB2, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0_HS_3_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": 0.11,
   "yaw": -6.13,
   "distance": 50
  }
 ],
 "id": "overlay_63DAFB86_76D8_AFA9_41D7_ABB0C514BC15",
 "data": {
  "label": "Image"
 }
},
{
 "id": "htmlText_63CE1829_76C7_A8FB_41DC_AF16458F6E65",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText28899"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.viewer_uid7466231C_7B1C_43BF_41DE_6C43B41FF1C0",
  {
   "horizontalAlign": "left",
   "children": [
    "this.htmltext_7467C31D_7B1C_43B9_41BF_8AC38A318248"
   ],
   "left": 0,
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0.3,
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "right": 0,
   "verticalAlign": "bottom",
   "paddingLeft": 0,
   "borderRadius": 0,
   "scrollBarWidth": 7,
   "minHeight": 20,
   "class": "Container",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "bottom": 0,
   "backgroundColor": [],
   "minWidth": 20,
   "height": "30%",
   "overflow": "scroll",
   "gap": 10,
   "borderSize": 0,
   "paddingBottom": 0,
   "paddingTop": 0,
   "contentOpaque": true,
   "layout": "vertical",
   "backgroundColorDirection": "vertical",
   "shadow": false,
   "data": {
    "name": "Container1873"
   },
   "scrollBarColor": "#FFFFFF",
   "scrollBarOpacity": 0.5
  },
  "this.component_7464931D_7B1C_43B9_41C7_C481858445A9",
  "this.component_7464831D_7B1C_43B9_41CF_4E31198BA3B2"
 ],
 "id": "container_7467931C_7B1C_43BF_41DC_6A7537744A7C",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "backgroundColor": [],
 "minWidth": 20,
 "height": "50%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "Container1872"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "useHandCursor": true,
 "map": {
  "width": 55.07,
  "x": 957.04,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_62A65118_736E_7930_41D3_560526C343C2_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 152.91,
  "offsetY": 0,
  "height": 55.07,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 957.04,
  "y": 152.91,
  "width": 55.07,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_62A65118_736E_7930_41D3_560526C343C2_HS_0.png",
     "width": 55,
     "class": "ImageResourceLevel",
     "height": 55
    }
   ]
  },
  "height": 55.07
 },
 "areas": [
  {
   "click": "this.setOverlayBehaviour(this.overlay_64DEDE0A_7346_B01C_41B7_C5E76194B057, this.panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89, 'triggerClick')",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_6202C506_736E_F910_41C5_49B814B8CC48",
 "data": {
  "label": "Image"
 }
},
{
 "id": "htmlText_661FC6A1_72C1_700C_41BE_0A44B5DCFF5E",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e15\u0e36\u0e01 \u0e13 \u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e27\u0e31\u0e19\u0e40\u0e2a\u0e32\u0e23\u0e4c \u0e17\u0e35\u0e48 5 \u0e21\u0e01\u0e23\u0e32\u0e04\u0e21 \u0e1e.\u0e28. 2471 \u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e28\u0e23\u0e35\u0e2a\u0e27\u0e23\u0e34\u0e19\u0e17\u0e34\u0e23\u0e32 \u0e1a\u0e23\u0e21\u0e23\u0e32\u0e0a\u0e40\u0e17\u0e27\u0e35 \u0e1e\u0e23\u0e30\u0e1e\u0e31\u0e19\u0e27\u0e31\u0e2a\u0e2a\u0e32\u0e2d\u0e31\u0e22\u0e22\u0e34\u0e01\u0e32\u0e40\u0e08\u0e49\u0e32 \u0e17\u0e23\u0e07\u0e40\u0e2a\u0e14\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e21\u0e32\u0e27\u0e32\u0e07\u0e28\u0e34\u0e25\u0e32\u0e24\u0e01\u0e29\u0e4c\u0e15\u0e36\u0e01 \u0e13 \u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e02\u0e2d\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0e1b\u0e35\u0e1e.\u0e28.2472 \u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e40\u0e08\u0e49\u0e32\u0e1a\u0e23\u0e21\u0e27\u0e07\u0e28\u0e4c\u0e40\u0e18\u0e2d\u0e40\u0e08\u0e49\u0e32\u0e1f\u0e49\u0e32\u0e1a\u0e23\u0e34\u0e1e\u0e31\u0e15\u0e23\u0e2a\u0e38\u0e02\u0e38\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e38\u0e4c \u0e01\u0e23\u0e21\u0e1e\u0e23\u0e30\u0e19\u0e04\u0e23\u0e2a\u0e27\u0e23\u0e23\u0e04\u0e4c\u0e27\u0e23\u0e1e\u0e34\u0e19\u0e34\u0e08\u0e40\u0e2a\u0e14\u0e47\u0e08\u0e21\u0e32\u0e40\u0e1b\u0e34\u0e14\u0e15\u0e36\u0e01\u0e2d\u0e32\u0e04\u0e32\u0e23 \u0e13 \u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e41\u0e25\u0e30\u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e40\u0e08\u0e49\u0e32\u0e1f\u0e49\u0e32\u0e21\u0e2b\u0e34\u0e14\u0e25\u0e2d\u0e14\u0e38\u0e25\u0e22\u0e40\u0e14\u0e0a \u0e01\u0e23\u0e21\u0e2b\u0e25\u0e27\u0e07\u0e2a\u0e07\u0e02\u0e25\u0e32\u0e19\u0e04\u0e23\u0e34\u0e19\u0e17\u0e23\u0e4c \u0e40\u0e2a\u0e14\u0e47\u0e08\u0e21\u0e32\u0e17\u0e23\u0e07\u0e07\u0e32\u0e19\u0e41\u0e1e\u0e17\u0e22\u0e4c \u0e41\u0e25\u0e30\u0e1b\u0e23\u0e30\u0e17\u0e31\u0e1a\u0e17\u0e35\u0e48\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e41\u0e21\u0e04\u0e04\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e04 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e27\u0e25\u0e32\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 3 \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c \u0e41\u0e25\u0e49\u0e27\u0e40\u0e2a\u0e14\u0e47\u0e08\u0e01\u0e25\u0e31\u0e1a\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e48\u0e27\u0e21\u0e43\u0e19\u0e07\u0e32\u0e19\u0e16\u0e27\u0e32\u0e22\u0e1e\u0e23\u0e30\u0e40\u0e1e\u0e25\u0e34\u0e07\u0e2a\u0e21\u0e40\u0e14\u0e47\u0e08\u0e01\u0e23\u0e21\u0e1e\u0e23\u0e30\u0e22\u0e32\u0e20\u0e32\u0e13\u0e38\u0e20\u0e31\u0e13\u0e11\u0e4c\u0e27\u0e23\u0e40\u0e14\u0e0a \u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e01\u0e34\u0e08 \u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c\u0e44\u0e14\u0e49\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e17\u0e32\u0e19\u0e17\u0e23\u0e31\u0e1e\u0e22\u0e4c\u0e2a\u0e48\u0e27\u0e19\u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c \u0e08\u0e33\u0e19\u0e27\u0e19 3,000 \u0e40\u0e2b\u0e23\u0e35\u0e22\u0e0d\u0e2a\u0e2b\u0e23\u0e31\u0e10 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e08\u0e31\u0e14\u0e0b\u0e37\u0e49\u0e2d\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07 X-rays \u0e02\u0e19\u0e32\u0e14 25 mA. \u0e43\u0e2b\u0e49\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 \u0e0b\u0e36\u0e48\u0e07\u0e19\u0e31\u0e1a\u0e40\u0e1b\u0e47\u0e19 X-rays \u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e41\u0e23\u0e01\u0e02\u0e2d\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 \u0e41\u0e25\u0e30\u0e21\u0e35\u0e1e\u0e23\u0e30\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e08\u0e30\u0e40\u0e2a\u0e14\u0e47\u0e08\u0e01\u0e25\u0e31\u0e1a\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e35\u0e01 \u0e41\u0e15\u0e48\u0e1e\u0e23\u0e30\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e47\u0e21\u0e34\u0e44\u0e14\u0e49\u0e40\u0e2a\u0e14\u0e47\u0e08\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e2d\u0e35\u0e01 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e17\u0e23\u0e07\u0e1b\u0e23\u0e30\u0e0a\u0e27\u0e23\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e27\u0e25\u0e32\u0e19\u0e32\u0e19\u0e08\u0e19\u0e2a\u0e34\u0e49\u0e19\u0e1e\u0e23\u0e30\u0e0a\u0e19\u0e21\u0e4c\u0e43\u0e19\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19\u0e1b\u0e35\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText22907"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "image_uid7476230E_7B1C_439B_41DD_828EA7B2CF15_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "media/photo_66182641_72C1_B00C_41D1_10A5F0DCDDAA.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "Image",
 "height": "50%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image1861"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.48,
   "yaw": 0.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_6AA6E797_76F8_A7A8_41D0_5D2F49427EB8, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0_HS_0_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": -8.19,
   "yaw": 0.52,
   "distance": 50
  }
 ],
 "id": "overlay_6DEB85EA_76F9_FB79_41D5_FD0AA3A92DFB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.44,
   "yaw": 167.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_6D5C3E91_76F8_69A8_41B5_C097B162656C, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.44,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0_HS_1_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": -9.42,
   "yaw": 167.58,
   "distance": 50
  }
 ],
 "id": "overlay_6DE3971E_76F8_58D9_41D2_74568C9E1EB6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.41,
   "yaw": 89.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "image": "this.AnimatedImageResource_698C646B_76C8_597F_41D1_5E39D9FAB525",
   "pitch": -5.18,
   "hfov": 24.41,
   "yaw": 89.95
  }
 ],
 "id": "overlay_6DB55E88_76F8_A9B9_418B_D10BA3757804",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.38,
   "yaw": -38.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7966812F_72C6_D014_41D7_1D6924624506, this.camera_750ED478_7B1C_4587_41B0_D6686D8BA756); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": "this.AnimatedImageResource_698DB46B_76C8_597F_41C3_0A29ADAB3918",
   "pitch": -10.78,
   "hfov": 13.38,
   "yaw": -38.68
  }
 ],
 "id": "overlay_6DFF8711_76FB_F8AB_41D4_A2D89ACCE3C5",
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_5635576F_7343_5014_41CC_4CEB114B7F49",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5635F76F_7343_5014_4193_FCD3A3F59CEE",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_5635976F_7343_5014_41D1_F9E7622E3569",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_563A476F_7343_5014_41C0_BA012B708345",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_797D3677_72C6_F0F4_41C8_C15BA41556AB_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_566405B6_76C8_7BE8_41D1_DB49A578017E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7A8E615F_76C9_BB57_41DD_685C1043C329_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_69D5F44A_76C8_58B9_41D5_54E2EF7579E7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5634376F_7343_5014_41B6_5C302ED03484",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_79767D8C_72C6_F014_41DB_9A52ADA8E74E_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5634B76F_7343_5014_41C4_02289AE0BF16",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_69D1C44A_76C8_58B9_41CB_3D2A7C7FE7E3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_69D1744A_76C8_58B9_41DB_DFE28AED7A7D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7AFAAA79_76C9_A95B_41CA_3FD3501F82B0_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_69D6844A_76C8_58B9_41D9_898C92B6ABF0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_698AE46B_76C8_597F_41DB_6D1FFD172563",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_796FFD91_72C7_500C_41BF_EC351DDC6F3F_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_698A046B_76C8_597F_41AF_8ADA510EAEAF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_69B7C46B_76C8_597F_41C8_D1D160C20ECB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_797813A4_72C6_B014_41D1_A0AECF6C8CED_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_69B4846B_76C8_597F_41C3_F5606BA59FE7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_69B5A46B_76C8_597F_41C8_97A8D09EE7DD",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_797AEBF1_72C6_D00C_41D2_3CE7BC403AF5_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_69B5D46B_76C8_597F_41DC_388A417C4344",
 "rowCount": 6,
 "frameCount": 24
},
{
 "viewerArea": "this.viewer_uid7445D302_7B1C_438B_41C9_63A41C9167F5",
 "id": "viewer_uid7445D302_7B1C_438B_41C9_63A41C9167F5PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "viewerArea": "this.viewer_uid747C530B_7B1C_439A_41D2_C2B442BF1BE6",
 "id": "viewer_uid747C530B_7B1C_439A_41D2_C2B442BF1BE6PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_69B3146B_76C8_597F_41D0_95CDE66432C9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_69B0946B_76C8_597F_41C4_CB32BDF58B90",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_69B0246B_76C8_597F_41D4_0AEAFDCD0484",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_796B5FDC_72C7_5034_41D7_43EE36561E31_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_69B0446B_76C8_597F_41D8_36A77E515C91",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5638C770_7343_500C_419E_78CA1EBCE2A9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_56395770_7343_500C_41D7_0AB05C106498",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5639F770_7343_500C_41D2_94B5AC45797B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_56399770_7343_500C_41DA_9E2A7F5EB2B2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_796B28E3_72C7_500C_41DA_450F54B79F10_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_563E2770_7343_500C_41D2_8919DD237002",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_563AB76F_7343_5014_41D9_4F263337F95E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_563B476F_7343_5014_41C8_B99D0136DD38",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_563BE770_7343_500C_41D5_805D26B680E2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_79751ACF_72C6_B015_41BE_A57AE535C940_1_HS_3_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "id": "AnimatedImageResource_563B8770_7343_500C_41D8_79096A72DA83",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_79898CE5_72C2_F014_41C2_54869D6C0D79_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_562D875F_7343_5034_41D8_B1F4F0A0BB4A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_6989A46B_76C8_597F_41D6_29EC9147BE97",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7968FE87_72C7_7015_41D4_460518DF9780_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_698F746B_76C8_597F_41CE_C8040CA9B6DD",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_562D275F_7343_5034_41C9_55575470F225",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_79FC54BD_72C3_7075_41D6_E4987603A213_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_562DD75F_7343_5034_41C2_0C3D9D11EAFC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "viewerArea": "this.viewer_uid7466231C_7B1C_43BF_41DE_6C43B41FF1C0",
 "id": "viewer_uid7466231C_7B1C_43BF_41DE_6C43B41FF1C0PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5633075F_7343_5034_41D0_4A9BD06F9242",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_5633B75F_7343_5034_41DB_7A929317D02D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7994979A_72C3_503C_41D0_F04DB3A891F6_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5633875F_7343_5034_41B0_D33683E1DF37",
 "rowCount": 6,
 "frameCount": 24
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid7445D302_7B1C_438B_41C9_63A41C9167F5",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "progressLeft": 10,
 "minWidth": 100,
 "playbackBarBorderSize": 2,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 3100,
 "progressRight": 10,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 2,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "progressBorderRadius": 4,
 "playbackBarBorderColor": "#AAAAAA",
 "playbackBarHeadHeight": 30,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#AAAAAA",
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 20,
 "data": {
  "name": "ViewerArea1846"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "id": "htmltext_7479B30A_7B1C_439B_41DA_8C1C2B10FF3A",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 5,
 "paddingTop": 5,
 "html": "",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "HTMLText1849"
 },
 "visible": false,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "component_747FC30B_7B1C_439A_41CA_40F85708BF84",
 "left": 10,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "propagateClick": false,
 "class": "IconButton",
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_6F515056_7A71_F630_41C2_4DF484A896E3_AlbumPlayList, -1)",
 "iconURL": "skin/album_left.png",
 "shadow": false,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "IconButton1850"
 },
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "component_747FE30B_7B1C_439A_41DC_32E792A5CD87",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "propagateClick": false,
 "class": "IconButton",
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_6F515056_7A71_F630_41C2_4DF484A896E3_AlbumPlayList, 1)",
 "iconURL": "skin/album_right.png",
 "shadow": false,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "IconButton1851"
 },
 "visible": false,
 "cursor": "hand"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_698B946B_76C8_597F_41C4_3F5F85AEF926",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_797C3658_72C7_503C_41B1_6AA54500EBD4_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_698B146B_76C8_597F_419C_E2EE02A80350",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_5637175F_7343_5034_41D9_7F5EB5D1B7A8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_79505DC0_72C1_500C_41CB_EDC6809B1A89_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5637B75F_7343_5034_418C_1CC17C98645F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_698C046B_76C8_597F_41C6_9BB42C99D875",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7966812F_72C6_D014_41D7_1D6924624506_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_698DB46B_76C8_597F_41D0_95AF7A0D815F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_69B1E46B_76C8_597F_41D9_984D8400BED8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_79699415_72C6_B034_41D9_C19923ABFD5E_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_69B1046B_76C8_597F_41C1_DE7A6C355522",
 "rowCount": 6,
 "frameCount": 24
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid747C530B_7B1C_439A_41D2_C2B442BF1BE6",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "progressLeft": 10,
 "minWidth": 100,
 "playbackBarBorderSize": 2,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 3100,
 "progressRight": 10,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 2,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "progressBorderRadius": 4,
 "playbackBarBorderColor": "#AAAAAA",
 "playbackBarHeadHeight": 30,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#AAAAAA",
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 20,
 "data": {
  "name": "ViewerArea1852"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "id": "htmltext_747D130B_7B1C_4399_415F_C2DC39E97675",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 5,
 "paddingTop": 5,
 "html": "",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "HTMLText1855"
 },
 "visible": false,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "component_7472B30B_7B1C_4399_41D6_80B2D0DE7956",
 "left": 10,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "propagateClick": false,
 "class": "IconButton",
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_62E25E26_72C1_5014_41CC_E7DA4463DC85_AlbumPlayList, -1)",
 "iconURL": "skin/album_left.png",
 "shadow": false,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "IconButton1856"
 },
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "component_7472A30B_7B1C_4399_41D3_3DF722F2455D",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "propagateClick": false,
 "class": "IconButton",
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_62E25E26_72C1_5014_41CC_E7DA4463DC85_AlbumPlayList, 1)",
 "iconURL": "skin/album_right.png",
 "shadow": false,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "IconButton1857"
 },
 "visible": false,
 "cursor": "hand"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_57DBC74F_7343_5014_41A7_D78237DD72DA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7997EB8A_72C3_701C_41CC_0C9AB90FC9A3_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5628475F_7343_5034_41D0_FA5C90C62CD0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7969F48A_72C6_D01C_41D8_FE8EA530FA36_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_69B6546B_76C8_597F_41BB_B59D5353CE9D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7988C40F_72C2_D014_41D7_6530AE26A1E6_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5631975F_7343_5034_41D9_03B39FC95788",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5630375F_7343_5034_41D6_CF1404D3F82F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_799A3E71_72C3_500C_41D3_5123086D3056_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5630D75F_7343_5034_41D9_36BAE1D7D890",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_5637775F_7343_5034_41AF_3909FDC8DD50",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5637475F_7343_5034_40A3_7E5DE5FDA800",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_796E0F4E_72C6_D014_41C5_F3C67380FCEF_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5637F75F_7343_5034_41D6_FB10D693A378",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_5636975F_7343_5034_41C8_32EDA2051B91",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_5637675F_7343_5034_41D6_49DB8230674A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7E814EAC_72C2_D014_41C2_B18388E38053_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_6A900A63_7AD3_D44D_41B0_E13374F73CEE",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_69B6246B_76C8_597F_41D0_48AF758E1A41",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_69B6746B_76C8_597F_41D6_70B39AFF2525",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7975D71A_72C7_703C_41D7_F92A481EDED9_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_69B7E46B_76C8_597F_41DD_8D917C118A33",
 "rowCount": 6,
 "frameCount": 24
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid7466231C_7B1C_43BF_41DE_6C43B41FF1C0",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "progressLeft": 10,
 "minWidth": 100,
 "playbackBarBorderSize": 2,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 3100,
 "progressRight": 10,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 2,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "progressBorderRadius": 4,
 "playbackBarBorderColor": "#AAAAAA",
 "playbackBarHeadHeight": 30,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#AAAAAA",
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 20,
 "data": {
  "name": "ViewerArea1871"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "id": "htmltext_7467C31D_7B1C_43B9_41BF_8AC38A318248",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 5,
 "paddingTop": 5,
 "html": "",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "HTMLText1874"
 },
 "visible": false,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "component_7464931D_7B1C_43B9_41C7_C481858445A9",
 "left": 10,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "propagateClick": false,
 "class": "IconButton",
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D_AlbumPlayList, -1)",
 "iconURL": "skin/album_left.png",
 "shadow": false,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "IconButton1875"
 },
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "component_7464831D_7B1C_43B9_41CF_4E31198BA3B2",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "propagateClick": false,
 "class": "IconButton",
 "hideEffect": {
  "duration": 250,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_68B0C0F5_7A53_B7F0_41DA_025B2C24751D_AlbumPlayList, 1)",
 "iconURL": "skin/album_right.png",
 "shadow": false,
 "showEffect": {
  "duration": 250,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "IconButton1876"
 },
 "visible": false,
 "cursor": "hand"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_698C646B_76C8_597F_41D1_5E39D9FAB525",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7971D831_72C6_D00D_41C4_E89BC00D9197_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_698DB46B_76C8_597F_41C3_0A29ADAB3918",
 "rowCount": 6,
 "frameCount": 24
}],
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "propagateClick": false,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "height": "100%",
 "buttonToggleMute": "this.IconButton_7C5A1D01_6E16_2505_4181_C912A287EFE5",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getKey": function(key){  return window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); }
 },
 "layout": "absolute",
 "buttonToggleFullscreen": "this.IconButton_7C7D1240_6E0A_3F02_41C3_6509F657D584",
 "mouseWheelEnabled": true,
 "shadow": false,
 "data": {
  "name": "Player28156"
 },
 "defaultVRPointer": "gaze",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
