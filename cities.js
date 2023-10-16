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
        touristAttractions: ['Tokijo bokštas', 'Harajuku', 'Senso-ji šventykla', 'Meiji šventykla', 'Tokijo imperatoriškieji rūmai', 'Kačių kavinė'],
        isCapital: true,
      },
  ]
  
  function renderCities() {
    const citiesList = document.querySelector('#cities-list')
  
    cities.forEach((city) => {
      console.log(city)
      console.log(city.name)
      console.log(city.population)
      console.log(city.isCapital)
      console.log(city.location)
      console.log(city.location.continent)
      console.log(city.location.country)
    
      console.log(city.touristAttractions)
      console.log(city.touristAttractions.length)
    
      city.touristAttractions.forEach(attraction => {
        console.log(attraction)
      })
  
      const cityWrapper = document.createElement('div')
      cityWrapper.classList.add('city-wrapper')
  
      let capitalTitle = ''
  
      if (city.isCapital) {
        cityWrapper.classList.add('capital')
        capitalTitle = ' (capital)'
      
      }
    
      const cityTitle = document.createElement('h2')
      cityTitle.textContent = city.name + capitalTitle
    
      const cityDescription = document.createElement('p')
      cityDescription.textContent = `${city.name} city is located in ${city.location.continent}, ${city.location.country} and has population of ${city.population} people.`
    
      cityWrapper.append(cityTitle, cityDescription)
    
      citiesList.append(cityWrapper)
    })


  }

 
  renderCities()
  
  function styleCities() {
    const citiesCapitals = document.querySelectorAll('.capital h2')
    
    citiesCapitals.forEach((capitalTitle) => {
      capitalTitle.style.color = 'red'
    })
  }
  
  const oddCities = document.querySelectorAll('.city-wrapper:nth-of-type(odd)')
   oddCities.forEach(city => {
     city.style.backgroundColor = '#f0f0f0'
  })

  const allCities = document.querySelectorAll('.city-wrapper')


  styleCities()