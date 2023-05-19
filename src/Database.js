export const Database = {
  components: [
    {id: 1, name: 'Ácido Sulfúrico (H2SO4)', unit: 'ml'},
    {id: 2, name: 'Hidróxido de Sodio (NaOH)', unit: 'ml'},
    {id: 3, name: 'Zinc Metal', unit: 'gr'},
    {id: 4, name: 'Sulfato de cobre (CuSO4)', unit: 'gr'},
    {id: 5, name: 'Sulfato de níquel (NiSO4)', unit: 'gr'},
    {id: 6, name: 'Sulfato de zinc (ZnSO4)', unit: 'gr'},
    {id: 7, name: 'Cloruro de oro (AuCl3)', unit: 'gr'},
  ],
  productionLines: [
    {id: 1, name: 'Línea Cobre'},
    {id: 2, name: 'Línea Zinc'},
  ], 
  stations: [
    {id: 1, name: 'Estación 1', productionLine: 1, volumen: 1000, components: [
      {component: 1, averge: 5, ideal: 10}, 
      {component: 2, averge: 5, ideal: 10}, 
    ]},
    {id: 2, name: 'Estación 2', productionLine: 1, volumen: 1000, components: [
      {component: 1, averge: 15, ideal: 30}, 
      {component: 6, averge: 100, ideal: 8}, 
    ]},

    {id: 3, name: 'Estación A', productionLine: 2, volumen: 1000, components: [
      {component: 1, averge: 5, ideal: 10}, 
      {component: 2, averge: 5, ideal: 10}, 
    ]},
    {id: 4, name: 'Estación B', productionLine: 2, volumen: 1000, components: [
      {component: 1, averge: 15, ideal: 30}, 
      {component: 6, averge: 100, ideal: 8}, 
    ]},
  ]
}