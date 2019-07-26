import { Injectable } from '@angular/core';
import { ResortEntity } from '../shared/models/resort-entity.model';
import { Subject } from 'rxjs';
import { FilterOption } from '../shared/models/filter-option.model';

@Injectable({
    providedIn: 'root'
})
export class ResortsService {
    public changeActiveFilterOption$$: Subject<FilterOption> = new Subject();
    public changeActiveResort$$: Subject<ResortEntity> = new Subject();

    public readonly filterOptions: FilterOption[] = ['Cheap', 'Mid-price', 'High', 'Disrespectful'];
    public readonly resortsList: ResortEntity[] = [
        {
            img: 'assets/images/2/n1.jpeg',
            address: '304 Schenck Place, Beechmont, Tennessee, 5852',
            phone: 375328908116,
            price_category: 'High',
            weather: {
                title: 'rain',
                icon: 'assets/images/rain.svg',
                water: {
                    celcius: 25,
                    fahrenheit: 57
                },
                temperature: {
                    celcius: 32,
                    fahrenheit: 64
                }
            },
            social_info: {
                title: 'Uxmox Zenolux',
                img: 'assets/images/a1.jpg',
                followers: 522,
                following: 89
            },
            type: 'High'
        },
        {
            img: 'assets/images/2/n2.jpeg',
            address: '651 Rapelye Street, Chelsea, Tennessee, 1285',
            phone: 292433660040,
            price_category: 'High',
            weather: {
                title: 'sun',
                icon: 'assets/images/sun.svg',
                water: {
                    celcius: 22,
                    fahrenheit: 54
                },
                temperature: {
                    celcius: 28,
                    fahrenheit: 60
                }
            },
            social_info: {
                title: 'Exospeed Knowlysis',
                img: 'assets/images/a2.jpg',
                followers: 550,
                following: 194
            },
            type: 'High'
        },
        {
            img: 'assets/images/2/n3.jpeg',
            address: '726 Grove Street, Murillo, Missouri, 8288',
            phone: 505858342015,
            price_category: 'Disrespectful',
            weather: {
                title: 'sun',
                icon: 'assets/images/sun.svg',
                water: {
                    celcius: 23,
                    fahrenheit: 55
                },
                temperature: {
                    celcius: 29,
                    fahrenheit: 61
                }
            },
            social_info: {
                title: 'Fishland Thredz',
                img: 'assets/images/a3.jpg',
                followers: 516,
                following: 127
            },
            type: 'Disrespectful'
        },
        {
            img: 'assets/images/2/n4.jpeg',
            address: '150 Brightwater Court, Romeville, Arizona, 9215',
            phone: 640579748593,
            price_category: 'Disrespectful',
            weather: {
                title: 'clouds',
                icon: 'assets/images/clouds.svg',
                water: {
                    celcius: 23,
                    fahrenheit: 55
                },
                temperature: {
                    celcius: 30,
                    fahrenheit: 62
                }
            },
            social_info: {
                title: 'Oceanica Xelegyl',
                img: 'assets/images/a4.jpg',
                followers: 815,
                following: 60
            },
            type: 'Disrespectful'
        },
        {
            img: 'assets/images/2/n5.jpeg',
            address: '774 Winthrop Street, Titanic, Connecticut, 5246',
            phone: 972137382459,
            price_category: 'Disrespectful',
            weather: {
                title: 'clouds',
                icon: 'assets/images/clouds.svg',
                water: {
                    celcius: 19,
                    fahrenheit: 51
                },
                temperature: {
                    celcius: 30,
                    fahrenheit: 62
                }
            },
            social_info: {
                title: 'Bovis Lexicondo',
                img: 'assets/images/a5.jpg',
                followers: 686,
                following: 162
            },
            type: 'Disrespectful'
        },
        {
            img: 'assets/images/2/n6.jpeg',
            address: '780 Columbus Place, Blandburg, Tennessee, 6676',
            phone: 267240464269,
            price_category: 'High',
            weather: {
                title: 'sun',
                icon: 'assets/images/sun.svg',
                water: {
                    celcius: 24,
                    fahrenheit: 56
                },
                temperature: {
                    celcius: 30,
                    fahrenheit: 62
                }
            },
            social_info: {
                title: 'Handshake Duflex',
                img: 'assets/images/a6.jpg',
                followers: 505,
                following: 173
            },
            type: 'High'
        },
        {
            img: 'assets/images/2/n7.jpeg',
            address: '484 Bliss Terrace, Farmers, Tennessee, 3206',
            phone: 786833324436,
            price_category: 'Disrespectful',
            weather: {
                title: 'rain',
                icon: 'assets/images/rain.svg',
                water: {
                    celcius: 31,
                    fahrenheit: 63
                },
                temperature: {
                    celcius: 32,
                    fahrenheit: 64
                }
            },
            social_info: {
                title: 'Exodoc Comvey',
                img: 'assets/images/a7.jpg',
                followers: 543,
                following: 139
            },
            type: 'Disrespectful'
        },
        {
            img: 'assets/images/2/n8.jpeg',
            address: '362 George Street, Faywood, Connecticut, 8260',
            phone: 949643758684,
            price_category: 'High',
            weather: {
                title: 'sun',
                icon: 'assets/images/sun.svg',
                water: {
                    celcius: 23,
                    fahrenheit: 55
                },
                temperature: {
                    celcius: 27,
                    fahrenheit: 59
                }
            },
            social_info: {
                title: 'Junipoor Kindaloo',
                img: 'assets/images/a8.jpg',
                followers: 936,
                following: 127
            },
            type: 'High'
        },
        {
            img: 'assets/images/2/n9.jpeg',
            address: '933 Miller Avenue, Ronco, Arizona, 8626',
            phone: 439872743935,
            price_category: 'Cheap',
            weather: {
                title: 'clouds',
                icon: 'assets/images/clouds.svg',
                water: {
                    celcius: 21,
                    fahrenheit: 53
                },
                temperature: {
                    celcius: 28,
                    fahrenheit: 60
                }
            },
            social_info: {
                title: 'Oatfarm Amtap',
                img: 'assets/images/a9.jpg',
                followers: 602,
                following: 54
            },
            type: 'Cheap'
        },
        {
            img: 'assets/images/2/n10.jpeg',
            address: '783 Huntington Street, Bloomington, Arizona, 4623',
            phone: 787632844097,
            price_category: 'High',
            weather: {
                title: 'sun',
                icon: 'assets/images/sun.svg',
                water: {
                    celcius: 19,
                    fahrenheit: 51
                },
                temperature: {
                    celcius: 29,
                    fahrenheit: 61
                }
            },
            social_info: {
                title: 'Imperium Plasmos',
                img: 'assets/images/a10.jpg',
                followers: 527,
                following: 53
            },
            type: 'High'
        },
        {
            img: 'assets/images/2/n11.jpeg',
            address: '671 Amboy Street, Norris, Arizona, 1448',
            phone: 642081065385,
            price_category: 'Mid-price',
            weather: {
                title: 'clouds',
                icon: 'assets/images/clouds.svg',
                water: {
                    celcius: 21,
                    fahrenheit: 53
                },
                temperature: {
                    celcius: 29,
                    fahrenheit: 61
                }
            },
            social_info: {
                title: 'Musanpoly Ecolight',
                img: 'assets/images/a11.jpg',
                followers: 996,
                following: 170
            },
            type: 'Mid-price'
        },
        {
            img: 'assets/images/2/n12.jpeg',
            address: '197 Stone Avenue, Lacomb, Tennessee, 1078',
            phone: 827680957381,
            price_category: 'High',
            weather: {
                title: 'clouds',
                icon: 'assets/images/clouds.svg',
                water: {
                    celcius: 24,
                    fahrenheit: 56
                },
                temperature: {
                    celcius: 31,
                    fahrenheit: 63
                }
            },
            social_info: {
                title: 'Assitia Plasmox',
                img: 'assets/images/a12.jpg',
                followers: 914,
                following: 138
            },
            type: 'High'
        },
        {
            img: 'assets/images/2/n13.jpeg',
            address: '996 McKinley Avenue, Biddle, California, 8307',
            phone: 754982662051,
            price_category: 'Cheap',
            weather: {
                title: 'sun',
                icon: 'assets/images/sun.svg',
                water: {
                    celcius: 23,
                    fahrenheit: 55
                },
                temperature: {
                    celcius: 32,
                    fahrenheit: 64
                }
            },
            social_info: {
                title: 'Geekular Kiosk',
                img: 'assets/images/a13.jpg',
                followers: 666,
                following: 165
            },
            type: 'Cheap'
        },
        {
            img: 'assets/images/2/n14.jpeg',
            address: '908 Schweikerts Walk, Abiquiu, Tennessee, 9101',
            phone: 829109245333,
            price_category: 'Disrespectful',
            weather: {
                title: 'sun',
                icon: 'assets/images/sun.svg',
                water: {
                    celcius: 25,
                    fahrenheit: 57
                },
                temperature: {
                    celcius: 32,
                    fahrenheit: 64
                }
            },
            social_info: {
                title: 'Kyagoro Coash',
                img: 'assets/images/a14.jpg',
                followers: 789,
                following: 79
            },
            type: 'Disrespectful'
        },
        {
            img: 'assets/images/2/n15.jpeg',
            address: '103 Johnson Avenue, Austinburg, Connecticut, 8271',
            phone: 641868848378,
            price_category: 'High',
            weather: {
                title: 'rain',
                icon: 'assets/images/rain.svg',
                water: {
                    celcius: 22,
                    fahrenheit: 54
                },
                temperature: {
                    celcius: 28,
                    fahrenheit: 60
                }
            },
            social_info: {
                title: 'Naxdis Exerta',
                img: 'assets/images/a15.jpg',
                followers: 755,
                following: 168
            },
            type: 'High'
        },
        {
            img: 'assets/images/2/n16.jpeg',
            address: '457 Auburn Place, Nord, California, 7522',
            phone: 507691338749,
            price_category: 'Disrespectful',
            weather: {
                title: 'rain',
                icon: 'assets/images/rain.svg',
                water: {
                    celcius: 22,
                    fahrenheit: 54
                },
                temperature: {
                    celcius: 29,
                    fahrenheit: 61
                }
            },
            social_info: {
                title: 'Printspan Velity',
                img: 'assets/images/a16.jpg',
                followers: 912,
                following: 148
            },
            type: 'Disrespectful'
        },
        {
            img: 'assets/images/2/n17.jpeg',
            address: '932 Coleman Street, Garfield, Arizona, 8630',
            phone: 507883689168,
            price_category: 'Cheap',
            weather: {
                title: 'clouds',
                icon: 'assets/images/clouds.svg',
                water: {
                    celcius: 19,
                    fahrenheit: 51
                },
                temperature: {
                    celcius: 28,
                    fahrenheit: 60
                }
            },
            social_info: {
                title: 'Anivet Exoswitch',
                img: 'assets/images/a17.jpg',
                followers: 712,
                following: 75
            },
            type: 'Cheap'
        },
        {
            img: 'assets/images/2/n18.jpeg',
            address: '868 Cobek Court, Thatcher, Connecticut, 6332',
            phone: 253838145044,
            price_category: 'Disrespectful',
            weather: {
                title: 'sun',
                icon: 'assets/images/sun.svg',
                water: {
                    celcius: 24,
                    fahrenheit: 56
                },
                temperature: {
                    celcius: 32,
                    fahrenheit: 64
                }
            },
            social_info: {
                title: 'Proxsoft Dentrex',
                img: 'assets/images/a18.jpg',
                followers: 815,
                following: 175
            },
            type: 'Disrespectful'
        },
        {
            img: 'assets/images/2/n19.jpeg',
            address: '701 Linden Boulevard, Chamberino, Arizona, 8063',
            phone: 231672429279,
            price_category: 'Cheap',
            weather: {
                title: 'clouds',
                icon: 'assets/images/clouds.svg',
                water: {
                    celcius: 24,
                    fahrenheit: 53
                },
                temperature: {
                    celcius: 29,
                    fahrenheit: 61
                }
            },
            social_info: {
                title: 'Trollery Grok',
                img: 'assets/images/a19.jpg',
                followers: 592,
                following: 169
            },
            type: 'Cheap'
        },
        {
            img: 'assets/images/2/n20.jpeg',
            address: '641 Barbey Street, Brooktrails, Tennessee, 1714',
            phone: 258757878269,
            price_category: 'High',
            weather: {
                title: 'rain',
                icon: 'assets/images/rain.svg',
                water: {
                    celcius: 21,
                    fahrenheit: 53
                },
                temperature: {
                    celcius: 31,
                    fahrenheit: 63
                }
            },
            social_info: {
                title: 'Hometown Helixo',
                img: 'assets/images/a20.jpg',
                followers: 510,
                following: 119
            },
            type: 'High'
        }
    ];
}
