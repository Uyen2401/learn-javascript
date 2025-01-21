// Example:
// const promise = () => {
//   return new Promise((resolve, reject) => {
//     const success = false;
//     setTimeout(() => {
//       if (success) {
//         resolve("123");
//       } else {
//         reject("That bai");
//       }
//     }, 2000);
//   });
// };

// const main = async () => {
//   //   promise()
//   //     .then((result) => {
//   //       console.log(result);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   try {
//     const result = await promise();
//     console.log(result);
//     const result1 = await promise();
//     console.log(result1);
//     const result2 = await promise();
//     console.log(result2);
//     const result3 = await promise();
//     console.log(result3);
//     const result4 = await promise();
//     console.log(result4);
//     const result5 = await promise();
//     console.log(result5);
//   } catch (err) {
//     console.log(err);
//   }
// };

// main();

// const getPost = () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "GET",
//     headers: {},
//   });
// };

// const sum = (number) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(number);
//     }, 2000);
//   });
// };

// const main = async () => {
//   const post = await getPost()
//     .then((res) => res.json())
//     .then((post) => {
//       return {
//         id: post.id,
//         userId: post.userId,
//         name: post.title,
//         description: post.body,
//       };
//     });

//   console.log(post);
// };

// main();

/**
 Exercise: Using graphQL to create an agreement
 */

//Ex1: Create an agreement

// const saveAgmt = (payload) => {
//   return fetch("https://chorus-test.one-line.com/mom/bff/graphql", {
//     headers: {
//       accept: "*/*",
//       "accept-language": "en-US,en;q=0.9,vi;q=0.8",
//       "cache-control": "no-cache",
//       "content-type": "application/json",
//       pragma: "no-cache",
//       priority: "u=1, i",
//       "sec-ch-ua":
//         '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": '"Windows"',
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-origin",
//       cookie:
//         "RecentlyCountry=[{%22name%22:%22Global%22%2C%22url%22:%22https://www.one-line.com%22}]; _hjSessionUser_5165711=eyJpZCI6IjdiM2VmZmZjLWY2MjItNWY4Ni1iMDZiLTY0YjVhZWYxNmYxYiIsImNyZWF0ZWQiOjE3MzU1NDA3NDA4MDgsImV4aXN0aW5nIjpmYWxzZX0=; _ga=GA1.1.1055741540.1735540741; __utma=231616193.1055741540.1735540741.1735540741.1735540741.1; __utmz=231616193.1735540741.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); _ga_7J012HL9SQ=GS1.1.1735540740.1.1.1735540751.0.0.0; _ga_GEGPH5FR3E=GS1.1.1735540740.1.1.1735540751.0.0.0; __Host-next-auth.csrf-token=5db4acee8a768af4f6af0911a72222a8a75a20171ab133734a7115b37f17cb96%7Ca3151a402f274a6aed0f4ba6f28934741dc09e853045362bb648e7565bc79ed3; __Secure-next-auth.callback-url=https%3A%2F%2Fchorus-test.one-line.com%2Fmom%2Fagmt%2Fcreate; user_id=uyen.nguyenthuy.tpv%40one-line.com; __Secure-next-auth.session-token=eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXllbi5uZ3V5ZW50aHV5LnRwdkBvbmUtbGluZS5jb20iLCJlbWFpbCI6InV5ZW4ubmd1eWVudGh1eS50cHZAb25lLWxpbmUuY29tIiwic3ViIjoidXllbi5uZ3V5ZW50aHV5LnRwdkBvbmUtbGluZS5jb20iLCJ1c2VyIjp7ImZpcnN0bmFtZSI6IlZhbmFzYSAoVXllbikiLCJsYXN0bmFtZSI6Ik5ndXllbiBUaHV5IFRQViIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoidXllbi5uZ3V5ZW50aHV5LnRwdkBvbmUtbGluZS5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ1eWVuLm5ndXllbnRodXkudHB2QG9uZS1saW5lLmNvbSJ9fQ.V83vnghdzYNWCCNIBGcSc4zmOg_rxRY8_8i7uTr0jaRu1Faz_0J-G0K_m0lFIpD7P3BZE3ov6jF_taWnwu4_1dAwrt6aiYvxJapgSxu850oGg_iXNxm1DbuqcYxr0I2K7teN9sf-Mfuk171GwFrLbI3cnNleZw6uefy0uAFsGetEGodSM93IwcCxdFY9h-V1nKlo9uWm81neVFjTbim-_VXXwQMOFYtBifB2KAYPaWr0A8DVFbdUuDxS0WRFLkbUktammdPA9V5BVQCk6fJhJ6qhuwnXqS4PIjDVVczWY0DJa0OCTpLpuhdtFDmyWRAbyw8XUFN2IJ8AdUfw4H6kkvr1Jbtv4RL0q8mEHbgWto8BZG3HT5xfDKRZsJzf6mCyqJlxV9hj8IeL4km0wC6Dthbq5rcU5E-ORVoS5i3FYKko_2SjF_Ip5NXGBXtkic7SGQjHm4M4vmOcHJaS0581VHDGVw2ILmjtlFZlYQdz4hNxYB06oKUM0xSDfOvXVqf_",
//       Referer: "https://chorus-test.one-line.com/mom/agmt/create",
//       "Referrer-Policy": "strict-origin-when-cross-origin",
//     },
//     body: JSON.stringify({
//       query: `mutation SaveAgmt($countries: [CountryInput!]!, $agmtItems: [AgmtItemInput!]!, $vendorCode: Int!, $type: String!, $contractNumber: String) {
//           saveAgmt(
//             countries: $countries
//             agmtItems: $agmtItems
//             vendorCode: $vendorCode
//             type: $type
//             contractNumber: $contractNumber
//           ) {
//             data {
//               status
//               agmtNumber
//               contractNumber
//             }
//             error {
//               code
//               message
//               details {
//                 code
//                 fieldName
//                 message
//               }
//             }
//           }
//                     }`,
//       variables: payload,
//     }),
//     method: "POST",
//   });
// };

// const createAgreement = async (payload) => {
//   const post = await saveAgmt(payload)
//     .then((res) => res.json())
//     .then((post) => {
//       return post.data.saveAgmt;
//     });

//   console.log(post);
// };

// const payload = {
//   countries: [
//     {
//       code: "KR",
//       ports: [
//         {
//           code: "KRINC",
//           terminalCodes: ["KRINC02"],
//         },
//       ],
//     },
//   ],
//   type: "PT",
//   vendorCode: 100795,
//   contractNumber: "",
//   agmtItems: [
//     {
//       ports: [
//         {
//           code: "KRINC",
//           terminalCodes: ["KRINC02"],
//         },
//       ],
//       costCode: "CNACCM",
//       currency: "JPY",
//       effectiveDate: {
//         effectiveFrom: "2024-12-31T17:00:00.000Z",
//         effectiveTo: "2025-01-30T17:00:00.000Z",
//       },
//       rateMethod: "Average",
//     },
//   ],
// };

// createAgreement(payload);

// EX2: Get an agreement and create a new agreement with existing agreement data
const printObject = (data) => {
  console.log(JSON.stringify(data, null, 2));
};

const findAgmt = async (agmtNumber) => {
  const res = await fetch("https://chorus-test.one-line.com/mom/bff/graphql", {
    method: "POST",
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,vi;q=0.8",
      "cache-control": "no-cache",
      "content-type": "application/json",
      pragma: "no-cache",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      cookie:
        "RecentlyCountry=[{%22name%22:%22Global%22%2C%22url%22:%22https://www.one-line.com%22}]; _hjSessionUser_5165711=eyJpZCI6IjdiM2VmZmZjLWY2MjItNWY4Ni1iMDZiLTY0YjVhZWYxNmYxYiIsImNyZWF0ZWQiOjE3MzU1NDA3NDA4MDgsImV4aXN0aW5nIjpmYWxzZX0=; _ga=GA1.1.1055741540.1735540741; __utma=231616193.1055741540.1735540741.1735540741.1735540741.1; __utmz=231616193.1735540741.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); _ga_7J012HL9SQ=GS1.1.1735540740.1.1.1735540751.0.0.0; _ga_GEGPH5FR3E=GS1.1.1735540740.1.1.1735540751.0.0.0; __Host-next-auth.csrf-token=5db4acee8a768af4f6af0911a72222a8a75a20171ab133734a7115b37f17cb96%7Ca3151a402f274a6aed0f4ba6f28934741dc09e853045362bb648e7565bc79ed3; __Secure-next-auth.callback-url=https%3A%2F%2Fchorus-test.one-line.com%2Fmom%2Fagmt%2Fcreate; user_id=uyen.nguyenthuy.tpv%40one-line.com; __Secure-next-auth.session-token=eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXllbi5uZ3V5ZW50aHV5LnRwdkBvbmUtbGluZS5jb20iLCJlbWFpbCI6InV5ZW4ubmd1eWVudGh1eS50cHZAb25lLWxpbmUuY29tIiwic3ViIjoidXllbi5uZ3V5ZW50aHV5LnRwdkBvbmUtbGluZS5jb20iLCJ1c2VyIjp7ImZpcnN0bmFtZSI6IlZhbmFzYSAoVXllbikiLCJsYXN0bmFtZSI6Ik5ndXllbiBUaHV5IFRQViIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoidXllbi5uZ3V5ZW50aHV5LnRwdkBvbmUtbGluZS5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ1eWVuLm5ndXllbnRodXkudHB2QG9uZS1saW5lLmNvbSJ9fQ.AZqOYnyMX1ekkTZjcLLEqlATSoZ3vcYiiBK72pwWPEst4dqkAq-IwXVzexVhUDdl3luW_yQPgYnFFUmMBOZITe5wn9CvED0lIslryMx2yHw-R7kyhQc3j0ncseXNC66TkG_2rwsNBf-sZs5NVP4xIpwL3Z2XPZ_bPRe1kU_2_6rJ3PT1en4vtco1ipqB45D73hHostVxRT1Xfm354sxrUvOUiPci4mQR_tDeNl5bTYYrmEH_wP2IPv6feDUbZCgFpgFuLe8FICNPY6B_56CW1VFvGOtFan5HHOKkeFDV-krrpxuKopppHBWnN5iPrnSHXoQFPv1gC8Azl8JIvULrr1wzKm9CQc35Ada_C7yaYke9BBU8Qjmm7XJ_Km5rH89ybo571m2m-cbChenksZiyvyDZz1y1orqan551n4lV0SPRZkTjVa66dWgUoW6yLJm7sJbcoNPyL37fKuhzoCZQ9yde3QRpfNgfyU6-t86lah2PClw8R1kodgvkZknWL9NP",
      Referer: "https://chorus-test.one-line.com/mom/agmt/create",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: JSON.stringify({
      query: `query FindAgmt($request: FindAgmtRequest) {
    findAgmt(request: $request) {
      data {
        agmtNumber
        status
        agmtType
        countries {
          countryCode
          countryName
        }
        ports {
          portCode
          portName
          countryCode
        }
        terminals {
          terminalCode
          terminalName
          portCode
        }
        vendor {
          vendorCode
          vendorName
          countryCode
          invoiceCurrencyCode
        }
        contractNumber
        agmtItems {
          costCode {
            code
            name
          }
          currency
          finalAmountAdjustment {
            method
            precision
          }
          effectiveDate {
            effectiveFrom
            effectiveTo
          }
          rateMethod
          base {
            items {
              formula {
                formulaId
                formula
              }
              condition {
                conditionId
                condition
              }
              rangeRateDetail {
                rangeRateItemId
                variantCode
                rangeRateItems {
                  from
                  to
                  rate
                }
              }
            }
          }
          ports {
            portCode
            portName
            countryCode
          }
          terminals {
            terminalCode
            terminalName
            portCode
          }
        }
      }
      error {
        ...ErrorDetails
      }
    }
  }
  
  fragment ErrorDetails on Error {
    code
    message
    details {
      code
      fieldName
      message
    }
           }`,
      variables: {
        request: {
          agmtNumber: agmtNumber,
        },
      },
    }),
  });
  return await res.json();
};

const getAgreement = async (agmtNumber) => {
  const post = await findAgmt(agmtNumber);
  return post.data.findAgmt.data;
};

// Create duplicate agreement: Header only
// const duplicateAgreement = async (agmtNumber) => {
//   const existingAgmt = await getAgreement(agmtNumber);
//   delete existingAgmt.agmtItems;
//   const newAgmtPayload = {
//     ...existingAgmt,
//     countries: [],
//   };

//   for (const country of existingAgmt.countries) {
//     const countryObj = {
//       code: country.countryCode,
//       ports: [],
//     };
//     for (const port of existingAgmt.ports) {
//       if (port.countryCode === country.countryCode) {
//         const portObj = {
//           code: port.portCode,
//           terminalCodes: [],
//         };
//         for (const terminal of existingAgmt.terminals) {
//           if (terminal.portCode === port.portCode) {
//             portObj.terminalCodes.push(terminal.terminalCode);
//           }
//         }
//         countryObj.ports.push(portObj);
//       }
//     }
//     newAgmtPayload.countries.push(countryObj);
//   }

//   const newAgmt = {
//     countries: newAgmtPayload.countries,
//     type: existingAgmt.agmtType,
//     vendorCode: existingAgmt.vendor.vendorCode,
//     contractNumber: existingAgmt.contractNumber,
//   };
//   printObject(newAgmt);
// };

// duplicateAgreement("MOMAGVN25010225");

// Create duplicate agreement: Header +  Body

const duplicateAgreementContainsBody = async (agmtNumber) => {
  const existingAgmt = await getAgreement(agmtNumber);
  const newAgmt = {
    countries: (existingAgmt.countries || []).map((country) => ({
        code: country.countryCode,
        ports: existingAgmt.ports?.map((port) => ({
          code: port.portCode,
          terminalCodes: existingAgmt.terminals
            .filter((terminal) => terminal.portCode === port.portCode)
            .map((terminal) => terminal.terminalCode),
        })),
    })),
    type: existingAgmt.agmtType,
    vendorCode: existingAgmt.vendor.vendorCode,
    contractNumber: existingAgmt.contractNumber,
    agmtItems: existingAgmt.agmtItems?.map((agmtItem) => ({
      ports: agmtItem.ports.map((port) => ({
        code: port.portCode,
        terminalCodes: agmtItem.terminals
          .filter((terminal) => terminal.portCode === port.portCode)
          .map((terminal) => terminal.terminalCode),
      })),
      costCode: agmtItem.costCode.code,
      currency: agmtItem.currency,
      effectiveDate: {
        effectiveFrom: agmtItem.effectiveDate.effectiveFrom,
        effectiveTo: agmtItem.effectiveDate.effectiveTo,
      },
      rateMethod: agmtItem.rateMethod,
      finalAmountAdjustment:
        agmtItem.rateMethod === "Agreement"
          ? {
              method: agmtItem.finalAmountAdjustment.method || "Round",
              precision: agmtItem.finalAmountAdjustment.precision || 0,
            }
          : undefined,
      base:
        agmtItem.rateMethod === "Agreement"
          ? {
              items: agmtItem.base.items.map((baseItem) => ({
                formula: {
                  formula: baseItem.formula.formula,
                  formulaId: baseItem.formula.formulaId || null,
                },
                rangeRateDetail: {
                  rangeRateItems: baseItem.rangeRateDetail.rangeRateItems.map(
                    (rangeItem) => ({
                      from: rangeItem.from,
                      to: rangeItem.to,
                      rate: rangeItem.rate,
                    })
                  ),
                  variantCode: baseItem.rangeRateDetail.variantCode,
                },
              })),
            }
          : undefined,
    })),
  };

  printObject(newAgmt);
};

duplicateAgreementContainsBody("MOMAGVN25010216");

//Ex3: read agreement list from json file and create new agreements with existing agreement data
