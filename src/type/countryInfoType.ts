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
    currencies:{
      [key:string]:{
        name:string;
      }
    },
    flags:{png:string},
    languages:Record<string,string>,
    borders:string[],
}