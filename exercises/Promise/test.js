function createAgmt(jsonResponse) {
    const data = jsonResponse.data.findAgmt.data;
  
    const agmt = {
      countries: data.countries.map(country => ({
        code: country.countryCode,
        ports: data.ports
          .filter(port => port.countryCode === country.countryCode)
          .map(port => ({
            code: port.portCode,
            terminalCodes: data.terminals
              .filter(terminal => terminal.portCode === port.portCode)
              .map(terminal => terminal.terminalCode)
          }))
      })),
      type: data.agmtType || "",
      vendorCode: data.vendor.vendorCode || null,
      contractNumber: data.contractNumber || "",
      agmtItems: data.agmtItems.map(item => ({
        ports: item.ports.map(port => ({
          code: port.portCode,
          terminalCodes: item.terminals
            .filter(terminal => terminal.portCode === port.portCode)
            .map(terminal => terminal.terminalCode)
        })),
        costCode: item.costCode.code || "",
        currency: item.currency || "",
        effectiveDate: {
          effectiveFrom: item.effectiveDate.effectiveFrom || "",
          effectiveTo: item.effectiveDate.effectiveTo || ""
        },
        rateMethod: item.rateMethod || "",
        finalAmountAdjustment: {
          method: item.finalAmountAdjustment.method || "",
          precision: item.finalAmountAdjustment.precision || 0
        },
        base: {
          items: item.base.items.map(baseItem => ({
            formula: {
              formula: baseItem.formula.formula || "",
              formulaId: baseItem.formula.formulaId || null
            },
            rangeRateDetail: {
              rangeRateItems: baseItem.rangeRateDetail.rangeRateItems.map(rangeItem => ({
                from: rangeItem.from || "",
                to: rangeItem.to || "",
                rate: rangeItem.rate || ""
              })),
              variantCode: baseItem.rangeRateDetail.variantCode || "",
              formulaDetailId: baseItem.rangeRateDetail.rangeRateItemId || null
            }
          }))
        }
      }))
    };
  
    return agmt;
  }
  
  // Example usage:
  const jsonResponse = {
    data: {
      findAgmt: {
        data: {
          agmtNumber: "MOMAGVN25010216",
          status: "WaitingForApproval",
          agmtType: "AG",
          countries: [
            {
              countryCode: "VN",
              countryName: "VIETNAM"
            }
          ],
          ports: [
            {
              portCode: "VNCMP",
              portName: "CAI MEP",
              countryCode: "VN"
            }
          ],
          terminals: [
            {
              terminalCode: "VNCMP01",
              terminalName: "TCCT (TAN CANG-CAI MEP CONTAINER TERMINAL)",
              portCode: "VNCMP"
            }
          ],
          vendor: {
            vendorCode: 141068,
            vendorName: "CMA CGM & ANL (SINGAPORE) PTE LTD.",
            countryCode: "SG",
            invoiceCurrencyCode: "SGD"
          },
          contractNumber: "",
          agmtItems: [
            {
              costCode: {
                code: "CNFECH",
                name: "Finance Expense - Card Handling Charge"
              },
              currency: "SGD",
              finalAmountAdjustment: {
                method: "",
                precision: 0
              },
              effectiveDate: {
                effectiveFrom: "2025-01-09T17:00:00+00:00",
                effectiveTo: "2025-02-08T17:00:00+00:00"
              },
              rateMethod: "Agreement",
              base: {
                items: [
                  {
                    formula: {
                      formulaId: 649,
                      formula: "BerthingTime_DAYS_DepArrivalDA"
                    },
                    condition: {
                      conditionId: 649,
                      condition: "Arrival"
                    },
                    rangeRateDetail: {
                      rangeRateItemId: 192,
                      variantCode: "BerthingTime_DAYS_DepArrivalDA",
                      rangeRateItems: [
                        {
                          from: "1",
                          to: "3",
                          rate: "1000"
                        },
                        {
                          from: "4",
                          to: "6",
                          rate: "1500"
                        },
                        {
                          from: "7",
                          to: "10",
                          rate: "2000"
                        }
                      ]
                    }
                  }
                ]
              },
              ports: [
                {
                  portCode: "VNCMP",
                  portName: "CAI MEP",
                  countryCode: "VN"
                }
              ],
              terminals: [
                {
                  terminalCode: "VNCMP01",
                  terminalName: "TCCT (TAN CANG-CAI MEP CONTAINER TERMINAL)",
                  portCode: "VNCMP"
                }
              ]
            }
          ]
        },
        error: null
      }
    }
  };
  
  console.log(createAgmt(jsonResponse));
  