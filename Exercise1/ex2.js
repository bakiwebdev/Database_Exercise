// 1) What are the names of countries with population greater than 8 million?
// => select name from country where population > 8000000;
// 2) What are the names of countries that have “land” in their names?
// => select name from country where name like '%land%';
// 3) What are the names of the cities with population in between 500,000 and 1 million?
// => select name from city where population between 500000 and 1000000;
// 4) What's the name of all the countries on the continent ‘Europe’?
// => select name from country where continent = 'Europe';
// 5) List all the countries in the descending order of their surface areas.
// => select name from country order by surfaceArea desc;
// 6) What are the names of all the cities in the Netherlands?
// => select name from city where countryCode like 'NL%';
// 7) What is the population of Rotterdam?
// => select population from city where name = 'Rotterdam';
// 8) What's the top 10 countries by Surface Area?
// => select name from country order by surfaceArea desc limit 10;
// 9) What's the top 10 most populated cities?
// => select name from city order by population desc limit 10;
// 10) What is the population number of the world?
// => select sum(population) from country;


/*
city field
ID => int
Name => char(35)
CountryCode => char(3)
District => char(20)
Population => int
*/

/*
country field
Code => char(3)
Name => char(52)
Continent => enum('Asia','Europe','North America','Africa','Oceania','Antarctica','South America')
Region => char(26)
SurfaceArea => float(10,2)
IndepYear => smallint(6)
Population => int
LifeExpectancy => float(3,1)
GNP => float(10,2)
GNPOld => float(10,2)
LocalName => char(45)
GovernmentForm => char(45)
HeadOfState => char(60)
*/

/*
    country_language field
    CountryCode => char(3)
    Language => char(30)
    IsOfficial => enum('T','F')
    Percentage => float(4,1)
*/