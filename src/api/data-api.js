import {instance} from "./api";

 

export const dataAPI = {
    
    getGeneralData(token, inn, tonality, documentCount, startDate, endDate, completeness, businessContext, mainRole, riskFactors, technicalNews, announcements, newsDigests) {
        const config = {
            headers: { Authorization: `Bearer ${token}`},
        };
        const bodyParameters = {
            
            "issueDateInterval": {
              "startDate": `${startDate}`,
              "endDate": `${endDate}`
            },
            "searchContext": {
              "targetSearchEntitiesContext": {
                "targetSearchEntities": [
                  {
                    "type": "company",
                    "sparkId": null,
                    "entityId": null,
                    "inn": `${inn}`,
                    "maxFullness": true,
                    "inBusinessNews": null
                  }
                ],
                "onlyMainRole": `${mainRole}`,
                "tonality": `${tonality}`,
                "onlyWithRiskFactors": `${riskFactors}`,
                "riskFactors": {
                  "and": [],
                  "or": [],
                  "not": []
                },
                "themes": {
                  "and": [],
                  "or": [],
                  "not": []
                }
              },
              "themesFilter": {
                "and": [],
                "or": [],
                "not": []
              }
            },
            "searchArea": {
              "includedSources": [],
              "excludedSources": [],
              "includedSourceGroups": [],
              "excludedSourceGroups": []
            },
            "attributeFilters": {
              "excludeTechNews": `${technicalNews}`,
              "excludeAnnouncements": `${announcements}`,
              "excludeDigests": `${newsDigests}`
            },
            "similarMode": "duplicates",
            "limit": `${documentCount}`,
            "sortType": "sourceInfluence",
            "sortDirectionType": "desc",
            "intervalType": "month",
            "histogramTypes": [
              "totalDocuments",
              "riskFactors"
            ]
          
        };


        return instance.post(`objectsearch/histograms`, 
        bodyParameters,
        config
        ).then((res) => {
            console.log(res.data);
            console.log("Account info is received successfully");
            return res;
          })
          .catch((e) => console.log("Failed receiving data..."));
      },


      getData(token, inn, tonality, documentCount, startDate, endDate, completeness, businessContext, mainRole, riskFactors, technicalNews, announcements, newsDigests) {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const bodyParameters = {
            
                "issueDateInterval": {
                  "startDate": `${startDate}`,
                  "endDate": `${endDate}`
                },
                "searchContext": {
                  "targetSearchEntitiesContext": {
                    "targetSearchEntities": [
                      {
                        "type": "company",
                        "sparkId": null,
                        "entityId": null,
                        "inn": `${inn}`,
                        "maxFullness": true,
                        "inBusinessNews": null
                      }
                    ],
                    "onlyMainRole": `${mainRole}`,
                    "tonality": `${tonality}`,
                    "onlyWithRiskFactors": `${riskFactors}`,
                    "riskFactors": {
                      "and": [],
                      "or": [],
                      "not": []
                    },
                    "themes": {
                      "and": [],
                      "or": [],
                      "not": []
                    }
                  },
                  "themesFilter": {
                    "and": [],
                    "or": [],
                    "not": []
                  }
                },
                "searchArea": {
                  "includedSources": [],
                  "excludedSources": [],
                  "includedSourceGroups": [],
                  "excludedSourceGroups": []
                },
                "attributeFilters": {
                  "excludeTechNews": `${technicalNews}`,
                  "excludeAnnouncements": `${announcements}`,
                  "excludeDigests": `${newsDigests}`
                },
                "similarMode": "duplicates",
                "limit": `${documentCount}`,
                "sortType": "sourceInfluence",
                "sortDirectionType": "desc",
                "intervalType": "month",
                "histogramTypes": [
                  "totalDocuments",
                  "riskFactors"
                ]
              
            };
        return instance.post(`objectsearch`, bodyParameters,  config).then((res) => {
            console.log(res);
            console.log("Account info is received successfully");
            return res;
          })
          .catch((e) => console.log("Failed receiving data..."));
      },

      getDetailData(token, arrForRequest) {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const bodyParameters = { 
                "ids": arrForRequest
              
        };

        return instance.post(`documents`, bodyParameters, config).then((res) => {
            console.log("Otvet"+res);
            console.log("Account info is received successfully");
            return res;
          })
          .catch((e) => console.log("Failed receiving data..."));
      },

}