import React, { useState } from 'react';
import Coffeeitem from './Coffeeitem';
import resObj from '../utils/mockdata'; 

function Body() {
  const [listofCoffee,setListofCoffee] = useState(
    [
      {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          "info": {
            "id": "138753607",
            "name": "Americano ( Coffee Box )",
            "category": "Hot Coffee Box ( Group Pack )",
            "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/a8feb3cf-e296-4b36-b0e3-4edbc4a97e47_d651f4cf-4187-4454-a5a6-781ae18cab06.jpeg",
            "inStock": 1,
            "isVeg": 1,
            "variants": {
              
            },
            "variantsV2": {
              "variantGroups": [
                {
                  "groupId": "46568929",
                  "name": "Size",
                  "variations": [
                    {
                      "name": "4 Unit",
                      "price": 460,
                      "default": 1,
                      "id": "147567986",
                      "inStock": 1,
                      "isVeg": 1,
                      "isEnabled": 1
                    },
                    {
                      "name": "2 Unit",
                      "price": 230,
                      "id": "147567987",
                      "inStock": 1,
                      "isVeg": 1,
                      "isEnabled": 1
                    }
                  ]
                }
              ],
              "pricingModels": [
                {
                  "variations": [
                    {
                      "groupId": "46568929",
                      "variationId": "147567986"
                    }
                  ],
                  "price": 46000,
                  "addonCombinations": [
                    {
                      "groupId": "169753590",
                      "addonId": "116668833"
                    },
                    {
                      "groupId": "169753590",
                      "addonId": "116668834"
                    },
                    {
                      "groupId": "169753590",
                      "addonId": "116668829"
                    },
                    {
                      "groupId": "169753590",
                      "addonId": "116668831"
                    }
                  ]
                },
                {
                  "variations": [
                    {
                      "groupId": "46568929",
                      "variationId": "147567987"
                    }
                  ],
                  "price": 23000,
                  "addonCombinations": [
                    {
                      "groupId": "169753590",
                      "addonId": "116668833"
                    },
                    {
                      "groupId": "169753590",
                      "addonId": "116668834"
                    },
                    {
                      "groupId": "169753590",
                      "addonId": "116668829"
                    },
                    {
                      "groupId": "169753590",
                      "addonId": "116668831"
                    }
                  ]
                }
              ]
            },
            "addons": [
              {
                "groupId": "169753590",
                "groupName": "Add On Flavor",
                "choices": [
                  {
                    "id": "116668833",
                    "name": "Hazelnut Syrup",
                    "price": 16000,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                  },
                  {
                    "id": "116668834",
                    "name": "Irish Syrup",
                    "price": 16000,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                  },
                  {
                    "id": "116668829",
                    "name": "Tiramisu Syrup",
                    "price": 16000,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                  },
                  {
                    "id": "116668831",
                    "name": "Vanilla Syrup",
                    "price": 16000,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                  }
                ],
                "maxAddons": 1,
                "maxFreeAddons": -1
              }
            ],
            "itemAttribute": {
              "vegClassifier": "VEG"
            },
            "defaultPrice": 46000,
            "ribbon": {
              
            },
            "showImage": true,
            "itemBadge": {
              
            },
            "badgesV2": {
              
            },
            "ratings": {
              "aggregatedRating": {
                
              }
            }
          },
          "analytics": {
            
          },
          "hideRestaurantDetails": true
        
      },
      },
      { 
      "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
      "info": {
        "id": "138753609",
        "name": "Cappuccino ( Coffee Box )",
        "category": "Hot Coffee Box ( Group Pack )",
        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d8bc24ad-d413-42c7-8927-cf6c4c379409_f69efefa-2665-4d23-a86b-c498752c0c27.jpeg",
        "inStock": 1,
        "isVeg": 1,
        "variants": {
          
        },
        "variantsV2": {
          "variantGroups": [
            {
              "groupId": "46568926",
              "name": "Size",
              "variations": [
                {
                  "name": "4 Unit",
                  "price": 520,
                  "default": 1,
                  "id": "147567979",
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "name": "2 Unit",
                  "price": 260,
                  "id": "147567980",
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ]
            }
          ],
          "pricingModels": [
            {
              "variations": [
                {
                  "groupId": "46568926",
                  "variationId": "147567979"
                }
              ],
              "price": 52000,
              "addonCombinations": [
                {
                  "groupId": "148191396",
                  "addonId": "116668833"
                },
                {
                  "groupId": "148191396",
                  "addonId": "116668834"
                },
                {
                  "groupId": "148191396",
                  "addonId": "116668829"
                },
                {
                  "groupId": "148191396",
                  "addonId": "116668831"
                }
              ]
            },
            {
              "variations": [
                {
                  "groupId": "46568926",
                  "variationId": "147567980"
                }
              ],
              "price": 26000,
              "addonCombinations": [
                {
                  "groupId": "148191396",
                  "addonId": "116668833"
                },
                {
                  "groupId": "148191396",
                  "addonId": "116668834"
                },
                {
                  "groupId": "148191396",
                  "addonId": "116668829"
                },
                {
                  "groupId": "148191396",
                  "addonId": "116668831"
                }
              ]
            }
          ]
        },
        "addons": [
          {
            "groupId": "148191396",
            "groupName": "Add On Flavor",
            "choices": [
              {
                "id": "116668833",
                "name": "Hazelnut Syrup",
                "price": 16000,
                "inStock": 1,
                "isVeg": 1,
                "isEnabled": 1
              },
              {
                "id": "116668834",
                "name": "Irish Syrup",
                "price": 16000,
                "inStock": 1,
                "isVeg": 1,
                "isEnabled": 1
              },
              {
                "id": "116668829",
                "name": "Tiramisu Syrup",
                "price": 16000,
                "inStock": 1,
                "isVeg": 1,
                "isEnabled": 1
              },
              {
                "id": "116668831",
                "name": "Vanilla Syrup",
                "price": 16000,
                "inStock": 1,
                "isVeg": 1,
                "isEnabled": 1
              }
            ],
            "maxAddons": 1,
            "maxFreeAddons": -1
          }
        ],
        "itemAttribute": {
          "vegClassifier": "VEG"
        },
        "defaultPrice": 52000,
        "ribbon": {
          
        },
        "showImage": true,
        "itemBadge": {
          
        },
        "badgesV2": {
          
        },
        "ratings": {
          "aggregatedRating": {
            
          }
        }
      },
      "analytics": {
        
      },
      "hideRestaurantDetails": true
    }
      },  
      {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
      "info": {
        "id": 138753610,
        "name": "Hot Chocolate ( Coffee Box )",
        "category": "Hot Coffee Box ( Group Pack )",
        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/6c0d0b8e-b30a-49df-a292-3e407106e35d_1e9f864a-78a0-4db6-8767-c7f5da00ab22.jpeg",
        "inStock": 1,
        "isVeg": 1,
        "variants": {
          
        },
        "variantsV2": {
          "variantGroups": [
            {
              "groupId": "46568927",
              "name": "Size",
              "variations": [
                {
                  "name": "4 Unit",
                  "price": 710,
                  "default": 1,
                  "id": "147567981",
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "name": "2 Unit",
                  "price": 360,
                  "id": "147567982",
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ]
            }
          ],
          "pricingModels": [
            {
              "variations": [
                {
                  "groupId": "46568927",
                  "variationId": "147567981"
                }
              ],
              "price": 71000
            },
            {
              "variations": [
                {
                  "groupId": "46568927",
                  "variationId": "147567982"
                }
              ],
              "price": 36000
            }
          ]
        },
        "itemAttribute": {
          "vegClassifier": "VEG"
        },
        "defaultPrice": 71000,
        "ribbon": {
          
        },
        "showImage": true,
        "itemBadge": {
          
        },
        "badgesV2": {
          
        },
        "ratings": {
          "aggregatedRating": {
            
          }
        }
      },
      "analytics": {
        
      },
      "hideRestaurantDetails": true
    }
      }, 
      {
     "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
        "info": {
          "id": 155722866,
          "name": "French Vanilla Latte",
          "category": "Hot Coffee [with Milk]",
          "description": "A delightful blend of creamy milk, rich espresso, and luscious French vanilla syrup.",
          "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/19/75c188b8-3a5b-4d51-815e-37a19d4f1a37_dabb064c-47da-4166-b197-bb1a49b2f282.png",
          "inStock": 1,
          "isVeg": 1,
          "variants": {
            
          },
          "variantsV2": {
            "variantGroups": [
              {
                "groupId": "50826172",
                "name": "Size",
                "variations": [
                  {
                    "name": "Regular",
                    "price": 224,
                    "default": 1,
                    "id": "159175293",
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                  },
                  {
                    "name": "Large",
                    "price": 266,
                    "id": "159175294",
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                  }
                ]
              }
            ],
            "pricingModels": [
              {
                "variations": [
                  {
                    "groupId": "50826172",
                    "variationId": "159175293"
                  }
                ],
                "price": 22400,
                "addonCombinations": [
                  {
                    "groupId": "186512120",
                    "addonId": "98555653"
                  }
                ]
              },
              {
                "variations": [
                  {
                    "groupId": "50826172",
                    "variationId": "159175294"
                  }
                ],
                "price": 26600,
                "addonCombinations": [
                  {
                    "groupId": "186512120",
                    "addonId": "98555653"
                  }
                ]
              }
            ]
          },
          "addons": [
            {
              "groupId": "186512120",
              "groupName": "Add On Coffee",
              "choices": [
                {
                  "id": "98555653",
                  "name": "Coffee Shot Add On",
                  "price": 5600,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ],
              "maxAddons": 1,
              "maxFreeAddons": -1
            }
          ],
          "itemAttribute": {
            "vegClassifier": "VEG"
          },
          "defaultPrice": 22400,
          "ribbon": {
            
          },
          "showImage": true,
          "itemBadge": {
            
          },
          "badgesV2": {
            
          },
          "ratings": {
            "aggregatedRating": {
              
            }
          }
        },
        "analytics": {
          
        },
        "hideRestaurantDetails": true
      }
      },  
      {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
        "info": {
          "id": 155722869,
          "name": "Pumpkin Delight Latte",
          "category": "Hot Coffee [with Milk]",
          "description": "A cozy blend of espresso, pumpkin and cinnamon syrups, creamy milk, and a sprinkle of cinnamon powder.",
          "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/19/6025b29d-17be-4425-a08f-d25c98585cbe_331693f1-8966-4c68-91bf-d7ec59654435.png",
          "inStock": 1,
          "isVeg": 1,
          "variants": {
            
          },
          "variantsV2": {
            "variantGroups": [
              {
                "groupId": "50826175",
                "name": "Size",
                "variations": [
                  {
                    "name": "Regular",
                    "price": 224,
                    "default": 1,
                    "id": "159175297",
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                  },
                  {
                    "name": "Large",
                    "price": 266,
                    "id": "159175298",
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                  }
                ]
              }
            ],
            "pricingModels": [
              {
                "variations": [
                  {
                    "groupId": "50826175",
                    "variationId": "159175297"
                  }
                ],
                "price": 22400,
                "addonCombinations": [
                  {
                    "groupId": "186512352",
                    "addonId": "98555653"
                  }
                ]
              },
              {
                "variations": [
                  {
                    "groupId": "50826175",
                    "variationId": "159175298"
                  }
                ],
                "price": 26600,
                "addonCombinations": [
                  {
                    "groupId": "186512352",
                    "addonId": "98555653"
                  }
                ]
              }
            ]
          },
          "addons": [
            {
              "groupId": "186512352",
              "groupName": "Add On Coffee",
              "choices": [
                {
                  "id": "98555653",
                  "name": "Coffee Shot Add On",
                  "price": 5600,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ],
              "maxAddons": 1,
              "maxFreeAddons": -1
            }
          ],
          "itemAttribute": {
            "vegClassifier": "VEG"
          },
          "defaultPrice": 22400,
          "ribbon": {
            
          },
          "showImage": true,
          "itemBadge": {
            
          },
          "badgesV2": {
            
          },
          "ratings": {
            "aggregatedRating": {
              
            }
          }
        },
        "analytics": {
          
        },
        "hideRestaurantDetails": true
      }
      },
      {
  "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
        "info": {
          "id": 155722894,
          "name": "Marshmallow Hot Chocolate",
          "category": "Hot Choco",
          "description": "The velvety  Delight of hot chocolate crowned with pillowy Marshmallow",
          "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/19/3ca36edf-f68b-46fc-b227-b08de79139f5_7e58d339-370e-4a79-a9e2-6c554a2ec8c9.png",
          "inStock": 1,
          "isVeg": 1,
          "price": 21000,
          "variants": {
            
          },
          "variantsV2": {
            
          },
          "itemAttribute": {
            "vegClassifier": "VEG"
          },
          "ribbon": {
            
          },
          "showImage": true,
          "itemBadge": {
            
          },
          "badgesV2": {
            
          },
          "ratings": {
            "aggregatedRating": {
              
            }
          }
        },
        "analytics": {
          
        },
        "hideRestaurantDetails": true
      }
      }   
  ]
  )
  return (
    <div className='body'>
        <div className='filter'>
        <button className='filter-btn' onClick={()=>{
          listofCoffee = listofCoffee.filter((card) => card.data.ratings>4);
        }}>
          Filter
        </button>
        </div>
        <div className='search'>Search</div>
      <div className='flex flex-wrap m-12 res-container'>
      {resObj.map((card) => (<Coffeeitem resData={card} /> ))}
      </div>
    </div>
  )
}

export default Body
