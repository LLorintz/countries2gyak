export type countryInfoType = {
    name: {
        common: string;
        official: string;
        nativeName: {
          [key: string]: {
           
            common: string;
          };
        };
      };
    ccn3:string,
    population:number,
    region:string,
    subregion:string,
    capital:string[],
    tld:string[],
    currencies:string,
    flags:{png:string},
    languages:string[],
    borders:string,
}