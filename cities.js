const cities = [
    {
      name: 'Vilnius',
      population: 500000,
      location: {
        continent: 'Europe',
        country: 'Lithuania',
      },
      touristAttractions: ['Gedimino pilis', 'Katedra', 'Rotušė', 'Valdovų rūmai'],
      isCapital: true,
    },
    {
      name: 'Riga',
      population: 300000,
      location: {
        continent: 'Europe',
        country: 'Latvia',
      },
      touristAttractions: ['Juodagalvių namai', 'Laisvės paminklas', 'Rygos Šv. Petro bažnyčia'],
      isCapital: true,
    },
    {
      name: 'Paris',
      population: 5000000,
      location: {
        continent: 'Europe',
        country: 'France',
      },
      touristAttractions: ['Eifelio bokštas', 'Luvras', 'Paryžiaus Triumfo arka'],
      isCapital: true,
    },
    {
        name: 'Tartu',
        population: 92000,
        location: {
          continent: 'Europe',
          country: 'Estonia',
        },
        touristAttractions: ['Ahhaa Science Centre', 'Botanical Garden of the University of Tartu'],
        isCapital: false,
      },
      {
        name: 'Hurgada',
        population: 160901,
        location: {
          continent: 'Afrika',
          country: 'Egypt',
        },
        touristAttractions: ['Dolphin World'],
        isCapital: false,
      },
      {
        name: 'Drezdenas',
        population: 554649,
        location: {
          continent: 'Europe',
          country: 'Germany',
        },
        touristAttractions: ['Cvingeris', 'Drezdeno pilis', 'Volkswagen permatoma gamykla', 'Semperoper operos teatras', 'Drezdeno Dievo Motinos bažnyčia', 'Pilnico pilis'],
        isCapital: false,
      },
      {
        name: 'Berlynas',
        population: 6144600,
        location: {
          continent: 'Europe',
          country: 'Germany',
        },
        touristAttractions: ['Brandenburgo vartai', 'Reichstagas', 'Berlyno katedra'],
        isCapital: true,
      },
      {
        name: 'San Diegas',
        population: 3276208,
        location: {
          continent: 'North America',
          country: 'South California',
        },
        touristAttractions: ['Balboa Park'],
        isCapital: false,
      },
       {
         name: 'Keiptaunas',
         population: 46180000000,
         location: {
           continent: 'Africa',
           country: 'PAR',
         },
         touristAttractions: ['Stalo kalnas', 'Liūto galva', 'Kirstenbošo nacionalinis botanikos sodas','Gerosios vilties kyšulys'],
         isCapital: false,
     },
      {
        name: 'Tokijas',
        population: 139600000000,
        location: {
          continent: 'Azia',
          country: 'Japan',
        },
        touristAttractions: ['Tokijo bokštas', 'Harajuku', 'Senso ji šventykla', 'Meiji šventykla', 'Tokijo imperatoriškieji rūmai', 'Kačių kavinė'],
        isCapital: true,
      },
  ]
  
//   function renderCities() {
//     const citiesList = document.querySelector('#cities-list')
  
//     cities.forEach((city) => {
//       console.log(city)
//       console.log(city.name)
//       console.log(city.population)
//       console.log(city.isCapital)
//       console.log(city.location)
//       console.log(city.location.continent)
//       console.log(city.location.country)
    
//       console.log(city.touristAttractions)
//       console.log(city.touristAttractions.length)
    
//       city.touristAttractions.forEach(attraction => {
//         console.log(attraction)
//       })
  
      function renderCities() {
        const citiesList = document.querySelector('#cities-list')
      
        cities.forEach((city) => {
          const cityWrapper = document.createElement('div')
          cityWrapper.classList.add('city-wrapper')
      
          let capitalTitle = ''
          let capitalDescription = ''
      
          if (city.isCapital) {
            cityWrapper.classList.add('capital')
            capitalTitle = ' (capital)'
            capitalDescription = ` ${city.name} is the capital of ${city.location.country}.`
          }
        
          const cityTitle = document.createElement('h2')
          cityTitle.textContent = city.name + capitalTitle
        
          const cityDescription = document.createElement('p')
          cityDescription.textContent = `${city.name} city is located in ${city.location.continent}, ${city.location.country} and has population of ${city.population} people.${capitalDescription}`
        
          cityWrapper.append(cityTitle, cityDescription)
      
          if (city.touristAttractions.length > 0) {
            const touristAttractionsWrapper = document.createElement('div')
            touristAttractionsWrapper.classList.add('tourist-attractions-list')
        
            const touristAttractionsTitle = document.createElement('h3')
        
            if (city.touristAttractions.length > 1) {
              touristAttractionsTitle.textContent = `Tourist attractions of ${city.name} are:`
            } else {
              touristAttractionsTitle.textContent = `Tourist attraction of ${city.name} is:`
            }
        
            const touristAttractionsList = document.createElement('ul')
        
            city.touristAttractions.forEach(attraction => {
              const touristAttractionItem = document.createElement('li')
              touristAttractionItem.textContent = attraction
        
              touristAttractionsList.append(touristAttractionItem)
            })
        
            touristAttractionsWrapper.append(touristAttractionsTitle, touristAttractionsList)
        
            cityWrapper.append(touristAttractionsWrapper)
          }
      
          citiesList.append(cityWrapper)
        })
      }
      
      renderCities()
      
      function styleCities() {
        const citiesCapitals = document.querySelectorAll('.capital h2')
      
        citiesCapitals.forEach((capitalTitle) => {
          capitalTitle.style.color = 'red'
        })
      
        // const oddCities = document.querySelectorAll('.city-wrapper:nth-of-type(odd)')
        // oddCities.forEach(city => {
        //   city.style.backgroundColor = '#f0f0f0'
        // })
      
        const allCities = document.querySelectorAll('.city-wrapper')
      
        // allCities.forEach((city, index) => {
        //   if (index % 2 === 0) {
        //     city.style.backgroundColor = '#f0f0f0'
        //   }
        // })
      
        for (let i = 0; i < allCities.length; i += 2) {
          allCities[i].style.backgroundColor = '#f0f0f0'
        }
      
        // const firstAttractionElements = document.querySelectorAll('li:first-of-type')
        // firstAttractionElements.forEach(element => {
        //   element.style.color = 'green'
        // })
      
        // const lastAttractionElements = document.querySelectorAll('li:nth-of-type(1n + 4)')
        // lastAttractionElements.forEach(element => {
        //   element.style.color = 'red'
        // })
      
        const touristAttractionLists = document.querySelectorAll('.tourist-attractions-list ul')
        touristAttractionLists.forEach(ulElement => {
          const liElements = ulElement.querySelectorAll('li')
          liElements.forEach((liElement, index) => {
            if (index === 0) {
              liElement.style.color = 'green'
            } else if (index > 2) {
              liElement.style.color = 'red'
            } else {
              liElement.style.color = 'orange'
            }
          })
        })
      
        const citiesList = document.querySelector('#cities-list')
        // citiesList.style.display = 'flex'
        // citiesList.style.flexWrap = 'wrap'
        // citiesList.style.gap = '20px'
      
        citiesList.style = `display: flex;
                            flex-wrap: wrap;
                            gap: 20px;`
      
        allCities.forEach((city, index) => {
          console.log(index, city)
          city.style.padding = '15px'
          city.style.boxSizing = 'border-box'
          
          if (index === allCities.length - 1 && index % 2 === 0) {
            city.style.width = '100%'
          } else {
            city.style.width = 'calc((100% - 20px) / 2)'
          }
        })
      }
      
      styleCities()