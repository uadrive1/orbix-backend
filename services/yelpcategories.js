
const stopcategories = new Map();

stopcategories.set('x-meal', []);
stopcategories.set('x-rest', []);
stopcategories.set('x-day', []);

const yelpcategories = 
{
    "categories": [
      {
        "alias": "3dprinting",
        "title": "3D Printing",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "abruzzese",
        "title": "Abruzzese",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "absinthebars",
        "title": "Absinthe Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [
          "CZ"
        ],
        "country_blacklist": []
      },
      {
        "alias": "acaibowls",
        "title": "Acai Bowls",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "IT",
          "MX",
          "PL",
          "TR"
        ]
      },
      {
        "alias": "accessories",
        "title": "Accessories",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "accountants",
        "title": "Accountants",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "acnetreatment",
        "title": "Acne Treatment",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "active",
        "title": "Active Life",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "acupuncture",
        "title": "Acupuncture",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "addictionmedicine",
        "title": "Addiction Medicine",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "JP"
        ]
      },
      {
        "alias": "adoptionservices",
        "title": "Adoption Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "adult",
        "title": "Adult Shops",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "adultedu",
        "title": "Adult Education",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "adultentertainment",
        "title": "Adult Entertainment",
        "parent_aliases": [
          "nightlife"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "advertising",
        "title": "Advertising",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "aerialfitness",
        "title": "Aerial Fitness",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "aerialtours",
        "title": "Aerial Tours",
        "parent_aliases": [
          "tours"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "aestheticians",
        "title": "Aestheticians",
        "parent_aliases": [
          "medicalspa"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "MX",
          "BE",
          "FR",
          "CH"
        ]
      },
      {
        "alias": "afghani",
        "title": "Afghan",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "MX",
          "TR"
        ]
      },
      {
        "alias": "african",
        "title": "African",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "TR"
        ]
      },
      {
        "alias": "afrobrazilian",
        "title": "Afro-Brazilian",
        "parent_aliases": [
          "religiousorgs"
        ],
        "country_whitelist": [
          "BR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "agriturismi",
        "title": "Agriturismi",
        "parent_aliases": [
          "hotels"
        ],
        "country_whitelist": [
          "AR",
          "AT",
          "CH",
          "CL",
          "CZ",
          "DE",
          "ES",
          "FR",
          "IT",
          "MX",
          "PL",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "aircraftdealers",
        "title": "Aircraft Dealers",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "CZ",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "aircraftrepairs",
        "title": "Aircraft Repairs",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "airductcleaning",
        "title": "Air Duct Cleaning",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "IE",
          "SG",
          "CA",
          "IT",
          "US",
          "NZ",
          "AU",
          "GB",
          "PH",
          "MY",
          "ES"
        ],
        "country_blacklist": []
      },
      {
        "alias": "airlines",
        "title": "Airlines",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "airport_shuttles",
        "title": "Airport Shuttles",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "airportlounges",
        "title": "Airport Lounges",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "airports",
        "title": "Airports",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "airportterminals",
        "title": "Airport Terminals",
        "parent_aliases": [
          "airports"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "airsoft",
        "title": "Airsoft",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "alentejo",
        "title": "Alentejo",
        "parent_aliases": [
          "portuguese"
        ],
        "country_whitelist": [
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "algarve",
        "title": "Algarve",
        "parent_aliases": [
          "portuguese"
        ],
        "country_whitelist": [
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "allergist",
        "title": "Allergists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "alsatian",
        "title": "Alsatian",
        "parent_aliases": [
          "french"
        ],
        "country_whitelist": [
          "DE",
          "FR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "alternativemedicine",
        "title": "Alternative Medicine",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "AT",
          "CH",
          "CL",
          "DE",
          "ES",
          "FI",
          "HK",
          "JP",
          "MX",
          "MY",
          "PH",
          "PL",
          "PT",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "altoatesine",
        "title": "Altoatesine",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "amateursportsteams",
        "title": "Amateur Sports Teams",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "amusementparks",
        "title": "Amusement Parks",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "andalusian",
        "title": "Andalusian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "ES",
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "anesthesiologists",
        "title": "Anesthesiologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "FR",
          "IT",
          "PT",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "animalassistedtherapy",
        "title": "Animal Assisted Therapy",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "animalholistic",
        "title": "Holistic Animal Care",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "animalphysicaltherapy",
        "title": "Animal Physical Therapy",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "animalshelters",
        "title": "Animal Shelters",
        "parent_aliases": [
          "pets"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "antiques",
        "title": "Antiques",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "apartmentagents",
        "title": "Apartment Agents",
        "parent_aliases": [
          "realestateagents"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "apartments",
        "title": "Apartments",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "appliances",
        "title": "Appliances",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "appraisalservices",
        "title": "Appraisal Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "apulian",
        "title": "Apulian",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "FR",
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "aquariums",
        "title": "Aquariums",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "aquariumservices",
        "title": "Aquarium Services",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "HK",
          "JP",
          "MX"
        ]
      },
      {
        "alias": "arabian",
        "title": "Arabic",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "DK"
        ]
      },
      {
        "alias": "arabpizza",
        "title": "Arab Pizza",
        "parent_aliases": [
          "arabian"
        ],
        "country_whitelist": [
          "BR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "arcades",
        "title": "Arcades",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "archery",
        "title": "Archery",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "architects",
        "title": "Architects",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "architecturaltours",
        "title": "Architectural Tours",
        "parent_aliases": [
          "tours"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "argentine",
        "title": "Argentine",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI"
        ]
      },
      {
        "alias": "armenian",
        "title": "Armenian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AR",
          "BE",
          "CZ",
          "ES",
          "FR",
          "GB",
          "IT",
          "PL",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "arroceria_paella",
        "title": "Arroceria / Paella",
        "parent_aliases": [
          "spanish"
        ],
        "country_whitelist": [
          "ES"
        ],
        "country_blacklist": []
      },
      {
        "alias": "artclasses",
        "title": "Art Classes",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "HK",
          "JP",
          "MX"
        ]
      },
      {
        "alias": "artconsultants",
        "title": "Art Consultants",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "artificialturf",
        "title": "Artificial Turf",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "artinstallation",
        "title": "Art Installation",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE",
          "MY",
          "PH",
          "PL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "artmuseums",
        "title": "Art Museums",
        "parent_aliases": [
          "museums"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "artrestoration",
        "title": "Art Restoration",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "arts",
        "title": "Arts & Entertainment",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "artsandcrafts",
        "title": "Arts & Crafts",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "artschools",
        "title": "Art Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "artspacerentals",
        "title": "Art Space Rentals",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [
          "GB",
          "HK",
          "IE",
          "IT",
          "JP",
          "SE",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "artsupplies",
        "title": "Art Supplies",
        "parent_aliases": [
          "artsandcrafts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "arttours",
        "title": "Art Tours",
        "parent_aliases": [
          "tours"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "asianfusion",
        "title": "Asian Fusion",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "assistedliving",
        "title": "Assisted Living Facilities",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "astrologers",
        "title": "Astrologers",
        "parent_aliases": [
          "psychic_astrology"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "asturian",
        "title": "Asturian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "ES"
        ],
        "country_blacklist": []
      },
      {
        "alias": "ateliers",
        "title": "Ateliers",
        "parent_aliases": [
          "artsandcrafts"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "CH",
          "DE",
          "DK",
          "IT",
          "JP",
          "NL",
          "NO",
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "attractionfarms",
        "title": "Attraction Farms",
        "parent_aliases": [
          "farms"
        ],
        "country_whitelist": [
          "AT",
          "BR",
          "CH",
          "DE",
          "DK",
          "ES",
          "IT",
          "NO",
          "PT",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "atvrentals",
        "title": "ATV Rentals/Tours",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "BE",
          "FI",
          "NL",
          "NO",
          "SE",
          "US",
          "CH",
          "CL",
          "DE",
          "PL",
          "AR",
          "AT",
          "MX",
          "ES"
        ],
        "country_blacklist": []
      },
      {
        "alias": "auctionhouses",
        "title": "Auction Houses",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "HK",
          "JP",
          "MY",
          "PH",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "audiologist",
        "title": "Audiologist",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "CZ",
          "DE"
        ]
      },
      {
        "alias": "audiovisualequipmentrental",
        "title": "Audio/Visual Equipment Rental",
        "parent_aliases": [
          "partyequipmentrentals"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "BR",
          "CH",
          "DE",
          "DK",
          "ES",
          "FR",
          "NL",
          "NO",
          "SE",
          "US",
          "SG",
          "CA",
          "AU",
          "MY",
          "PH",
          "IE",
          "PL",
          "GB"
        ],
        "country_blacklist": []
      },
      {
        "alias": "australian",
        "title": "Australian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "austrian",
        "title": "Austrian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "DK",
          "ES"
        ]
      },
      {
        "alias": "authorized_postal_representative",
        "title": "Authorized Postal Representative",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [
          "NO",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "auto",
        "title": "Automotive",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "auto_detailing",
        "title": "Auto Detailing",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "BR",
          "ES"
        ]
      },
      {
        "alias": "autocustomization",
        "title": "Auto Customization",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "AR",
          "CL",
          "CZ",
          "ES",
          "MX",
          "PT",
          "SG",
          "US",
          "CA",
          "DE",
          "CH",
          "AT",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "autodamageassessment",
        "title": "Car Inspectors",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "BE",
          "BR",
          "DE",
          "DK",
          "NL",
          "NO",
          "PT",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "autoelectric",
        "title": "Auto Electric Services",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "AR",
          "BR",
          "CL",
          "CZ",
          "ES",
          "IT",
          "MX",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "autoglass",
        "title": "Auto Glass Services",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "ES"
        ]
      },
      {
        "alias": "autoinsurance",
        "title": "Auto Insurance",
        "parent_aliases": [
          "insurance"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CA",
          "CH",
          "DE",
          "FI",
          "FR",
          "GB",
          "HK",
          "IE",
          "MY",
          "NZ",
          "PH",
          "SG",
          "TW"
        ]
      },
      {
        "alias": "autoloanproviders",
        "title": "Auto Loan Providers",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "AU",
          "CA",
          "CZ",
          "IT",
          "PT",
          "SG",
          "TR",
          "US",
          "BE",
          "NL",
          "MY",
          "NZ",
          "GB",
          "PH",
          "IE",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "autopartssupplies",
        "title": "Auto Parts & Supplies",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "autorepair",
        "title": "Auto Repair",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "autosecurity",
        "title": "Auto Security",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "autoupholstery",
        "title": "Auto Upholstery",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "auvergnat",
        "title": "Auvergnat",
        "parent_aliases": [
          "french"
        ],
        "country_whitelist": [
          "FR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "aviationservices",
        "title": "Aviation Services",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "awnings",
        "title": "Awnings",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "axethrowing",
        "title": "Axe Throwing",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "CA",
          "GB",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "ayurveda",
        "title": "Ayurveda",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "azores",
        "title": "Azores",
        "parent_aliases": [
          "portuguese"
        ],
        "country_whitelist": [
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "baby_gear",
        "title": "Baby Gear & Furniture",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "backflowservices",
        "title": "Backflow Services",
        "parent_aliases": [
          "plumbing"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "backshop",
        "title": "Backshop",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "CH",
          "DE",
          "AT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "baden",
        "title": "Baden",
        "parent_aliases": [
          "german"
        ],
        "country_whitelist": [
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "badminton",
        "title": "Badminton",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "NZ",
          "PL",
          "SG"
        ]
      },
      {
        "alias": "bagels",
        "title": "Bagels",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "ES"
        ]
      },
      {
        "alias": "baguettes",
        "title": "Baguettes",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "CZ",
          "DE",
          "IT",
          "MX",
          "NO",
          "PT",
          "SE",
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bailbondsmen",
        "title": "Bail Bondsmen",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bakeries",
        "title": "Bakeries",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "balloonservices",
        "title": "Balloon Services",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [
          "BE",
          "CH",
          "NL",
          "IE",
          "CA",
          "DE",
          "US",
          "NZ",
          "AU",
          "AT",
          "BR",
          "SG",
          "PL",
          "GB"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bangladeshi",
        "title": "Bangladeshi",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "DK",
          "ES",
          "MX",
          "PT",
          "TR"
        ]
      },
      {
        "alias": "bankruptcy",
        "title": "Bankruptcy Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "banks",
        "title": "Banks & Credit Unions",
        "parent_aliases": [
          "financialservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "barbers",
        "title": "Barbers",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "barcrawl",
        "title": "Bar Crawl",
        "parent_aliases": [
          "nightlife"
        ],
        "country_whitelist": [
          "AR",
          "AT",
          "AU",
          "CH",
          "CZ",
          "DE",
          "MX",
          "PL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "barreclasses",
        "title": "Barre Classes",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "CA",
          "CZ",
          "DK",
          "FI",
          "GB",
          "IE",
          "NL",
          "NO",
          "NZ",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bars",
        "title": "Bars",
        "parent_aliases": [
          "nightlife"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bartenders",
        "title": "Bartenders",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "FI",
          "GB",
          "HK",
          "IE",
          "JP",
          "MY",
          "NO",
          "NZ",
          "PH",
          "PL",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "bartendingschools",
        "title": "Bartending Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "baseballfields",
        "title": "Baseball Fields",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "basketballcourts",
        "title": "Basketball Courts",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "CA",
          "GB",
          "IE",
          "NL",
          "PL",
          "SE"
        ]
      },
      {
        "alias": "basque",
        "title": "Basque",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "CZ",
          "DK",
          "PT",
          "SG",
          "TR"
        ]
      },
      {
        "alias": "bathing_area",
        "title": "Bathing Area",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "CH",
          "DK",
          "PT",
          "NO",
          "DE",
          "JP",
          "CZ",
          "AT",
          "FI",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "batterystores",
        "title": "Battery Stores",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "battingcages",
        "title": "Batting Cages",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "JP",
          "SG",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bavarian",
        "title": "Bavarian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bbq",
        "title": "Barbeque",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "BR"
        ]
      },
      {
        "alias": "beachbars",
        "title": "Beach Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "CA",
          "CZ",
          "FI",
          "GB",
          "HK",
          "IE",
          "JP",
          "MY",
          "NZ",
          "PH",
          "PL",
          "TR",
          "TW",
          "US"
        ]
      },
      {
        "alias": "beachequipmentrental",
        "title": "Beach Equipment Rentals",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "beaches",
        "title": "Beaches",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "beachvolleyball",
        "title": "Beach Volleyball",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "CA",
          "CH",
          "FR",
          "GB",
          "HK",
          "IE",
          "IT",
          "MY",
          "NL",
          "NZ",
          "PH",
          "PL",
          "TR",
          "TW",
          "US"
        ]
      },
      {
        "alias": "beautysvc",
        "title": "Beauty & Spas",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bedbreakfast",
        "title": "Bed & Breakfast",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "beer_and_wine",
        "title": "Beer, Wine & Spirits",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "beerbar",
        "title": "Beer Bar",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "beergarden",
        "title": "Beer Garden",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "CZ",
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "beergardens",
        "title": "Beer Gardens",
        "parent_aliases": [
          "nightlife"
        ],
        "country_whitelist": [
          "AU",
          "CZ",
          "DK",
          "FR",
          "GB",
          "IE",
          "IT",
          "JP",
          "MX",
          "NO",
          "PL",
          "SE",
          "US",
          "CA"
        ],
        "country_blacklist": []
      },
      {
        "alias": "beerhall",
        "title": "Beer Hall",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "beertours",
        "title": "Beer Tours",
        "parent_aliases": [
          "tours"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "behavioranalysts",
        "title": "Behavior Analysts",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "beira",
        "title": "Beira",
        "parent_aliases": [
          "portuguese"
        ],
        "country_whitelist": [
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "beisl",
        "title": "Beisl",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "belgian",
        "title": "Belgian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bento",
        "title": "Bento",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "berrichon",
        "title": "Berrichon",
        "parent_aliases": [
          "french"
        ],
        "country_whitelist": [
          "FR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bespoke",
        "title": "Bespoke Clothing",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "BR",
          "CL",
          "FI",
          "JP",
          "MX",
          "SE",
          "TR"
        ]
      },
      {
        "alias": "bettingcenters",
        "title": "Betting Centers",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CA",
          "FI",
          "FR",
          "NO",
          "NZ",
          "SG",
          "US"
        ]
      },
      {
        "alias": "beverage_stores",
        "title": "Beverage Store",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "AT",
          "AU",
          "BE",
          "CH",
          "CL",
          "DE",
          "ES",
          "IT",
          "NL",
          "PT",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bicyclepaths",
        "title": "Bicycle Paths",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CA",
          "CH",
          "DE",
          "FR",
          "HK",
          "IT",
          "MY",
          "PH",
          "TR",
          "TW",
          "US"
        ]
      },
      {
        "alias": "bicycles",
        "title": "Bicycles",
        "parent_aliases": [],
        "country_whitelist": [
          "CZ",
          "DK",
          "PL",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bike_repair_maintenance",
        "title": "Bike Repair/Maintenance",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bikeassociations",
        "title": "Bike Associations",
        "parent_aliases": [
          "bicycles"
        ],
        "country_whitelist": [
          "DK",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bikeparking",
        "title": "Bike Parking",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "bikerentals",
        "title": "Bike Rentals",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bikerepair",
        "title": "Bike Repair",
        "parent_aliases": [
          "bicycles"
        ],
        "country_whitelist": [
          "DK",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bikes",
        "title": "Bikes",
        "parent_aliases": [
          "sportgoods"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bikesharing",
        "title": "Bike Sharing",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bikeshop",
        "title": "Bike Shop",
        "parent_aliases": [
          "bicycles"
        ],
        "country_whitelist": [
          "DK",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "biketours",
        "title": "Bike tours",
        "parent_aliases": [
          "tours"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "billingservices",
        "title": "Billing Services",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bingo",
        "title": "Bingo Halls",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "BR",
          "CL",
          "DK",
          "ES",
          "FI",
          "GB",
          "IE",
          "IT",
          "MX",
          "NO",
          "NZ",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "biohazardcleanup",
        "title": "Biohazard Cleanup",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "birdshops",
        "title": "Bird Shops",
        "parent_aliases": [
          "petstore"
        ],
        "country_whitelist": [
          "BE",
          "DE",
          "DK",
          "ES",
          "IT",
          "NL",
          "NO",
          "SE",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bistros",
        "title": "Bistros",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "US"
        ]
      },
      {
        "alias": "blacksea",
        "title": "Black Sea",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "blinds",
        "title": "Shades & Blinds",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "blooddonation",
        "title": "Blood & Plasma Donation Centers",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "CA",
          "GB",
          "HK",
          "IE",
          "MY",
          "NL",
          "PH",
          "SG",
          "TW"
        ]
      },
      {
        "alias": "blowfish",
        "title": "Blowfish",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "blowoutservices",
        "title": "Blow Dry/Out Services",
        "parent_aliases": [
          "hair"
        ],
        "country_whitelist": [
          "AU",
          "CA",
          "CZ",
          "DK",
          "FR",
          "GB",
          "IE",
          "NO",
          "PT",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "boatcharters",
        "title": "Boat Charters",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "boatdealers",
        "title": "Boat Dealers",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "CL",
          "FI",
          "FR",
          "HK",
          "IT",
          "JP",
          "MY",
          "PH",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "boating",
        "title": "Boating",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "boatpartsandsupplies",
        "title": "Boat Parts & Supplies",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "boatrepair",
        "title": "Boat Repair",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "boattours",
        "title": "Boat Tours",
        "parent_aliases": [
          "tours"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bobsledding",
        "title": "Bobsledding",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bocceball",
        "title": "Bocce Ball",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bodycontouring",
        "title": "Body Contouring",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR",
          "IT"
        ]
      },
      {
        "alias": "bodyshops",
        "title": "Body Shops",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bookbinding",
        "title": "Bookbinding",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bookkeepers",
        "title": "Bookkeepers",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [
          "BE",
          "NL",
          "HK",
          "IE",
          "MY",
          "CA",
          "US",
          "CZ",
          "NZ",
          "AU",
          "GB",
          "TW",
          "PH",
          "SG"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bookstores",
        "title": "Bookstores",
        "parent_aliases": [
          "media"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bootcamps",
        "title": "Boot Camps",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [
          "AU",
          "CZ",
          "DK",
          "ES",
          "IT",
          "NO",
          "NZ",
          "PL",
          "PT",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "boudoirphotography",
        "title": "Boudoir Photography",
        "parent_aliases": [
          "photographers"
        ],
        "country_whitelist": [
          "CA",
          "DE",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bouncehouserentals",
        "title": "Bounce House Rentals",
        "parent_aliases": [
          "partyequipmentrentals"
        ],
        "country_whitelist": [
          "AT",
          "CA",
          "CH",
          "DE",
          "SE",
          "US",
          "DK",
          "NO",
          "AU",
          "BE",
          "IE",
          "NZ",
          "NL",
          "GB",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bourguignon",
        "title": "Bourguignon",
        "parent_aliases": [
          "french"
        ],
        "country_whitelist": [
          "FR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bowling",
        "title": "Bowling",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "boxing",
        "title": "Boxing",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "ES",
          "FI",
          "PL",
          "SE",
          "SG",
          "TR"
        ]
      },
      {
        "alias": "brasseries",
        "title": "Brasseries",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "MX"
        ]
      },
      {
        "alias": "brazilian",
        "title": "Brazilian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "brazilianempanadas",
        "title": "Brazilian Empanadas",
        "parent_aliases": [
          "brazilian"
        ],
        "country_whitelist": [
          "BR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "brazilianjiujitsu",
        "title": "Brazilian Jiu-jitsu",
        "parent_aliases": [
          "martialarts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "breakfast_brunch",
        "title": "Breakfast & Brunch",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "breweries",
        "title": "Breweries",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "brewingsupplies",
        "title": "Brewing Supplies",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "HK",
          "JP"
        ]
      },
      {
        "alias": "brewpubs",
        "title": "Brewpubs",
        "parent_aliases": [
          "breweries"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "ES",
          "FR",
          "IT",
          "MX"
        ]
      },
      {
        "alias": "bridal",
        "title": "Bridal",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "british",
        "title": "British",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI"
        ]
      },
      {
        "alias": "bubblesoccer",
        "title": "Bubble Soccer",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bubbletea",
        "title": "Bubble Tea",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "AT",
          "CH",
          "ES",
          "MX",
          "TR"
        ]
      },
      {
        "alias": "buddhist_temples",
        "title": "Buddhist Temples",
        "parent_aliases": [
          "religiousorgs"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "buffets",
        "title": "Buffets",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "buildingsupplies",
        "title": "Building Supplies",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "bulgarian",
        "title": "Bulgarian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "CA",
          "DK",
          "NL",
          "NO",
          "NZ",
          "SG",
          "TR"
        ]
      },
      {
        "alias": "bulkbilling",
        "title": "Bulk Billing",
        "parent_aliases": [
          "medcenters"
        ],
        "country_whitelist": [
          "AU"
        ],
        "country_blacklist": []
      },
      {
        "alias": "bungeejumping",
        "title": "Bungee Jumping",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "burgers",
        "title": "Burgers",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "burmese",
        "title": "Burmese",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "DK",
          "ES",
          "FI",
          "PT",
          "TR"
        ]
      },
      {
        "alias": "buses",
        "title": "Buses",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "businessconsulting",
        "title": "Business Consulting",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "FI",
          "HK",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "businessfinancing",
        "title": "Business Financing",
        "parent_aliases": [
          "financialservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "businesslawyers",
        "title": "Business Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [
          "BR",
          "CA",
          "CZ",
          "DK",
          "GB",
          "IE",
          "NO",
          "PL",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "busrental",
        "title": "Bus Rental",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "busstations",
        "title": "Bus Stations",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "bustours",
        "title": "Bus Tours",
        "parent_aliases": [
          "tours"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "butcher",
        "title": "Butcher",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE"
        ]
      },
      {
        "alias": "c_and_mh",
        "title": "Counseling & Mental Health",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "cabaret",
        "title": "Cabaret",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "HK",
          "JP",
          "MX"
        ]
      },
      {
        "alias": "cabinetry",
        "title": "Cabinetry",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "HK",
          "JP",
          "MX"
        ]
      },
      {
        "alias": "cablecars",
        "title": "Cable Cars",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [
          "AT",
          "BR",
          "CH",
          "CZ",
          "DE",
          "FR",
          "IT",
          "JP",
          "NZ",
          "PT",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cafes",
        "title": "Cafes",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "ES",
          "FI",
          "MX"
        ]
      },
      {
        "alias": "cafeteria",
        "title": "Cafeteria",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "CA",
          "FR",
          "IE",
          "NZ",
          "SE",
          "SG"
        ]
      },
      {
        "alias": "cajun",
        "title": "Cajun/Creole",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "ES",
          "PT",
          "SG"
        ]
      },
      {
        "alias": "cakeshop",
        "title": "Patisserie/Cake Shop",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "calabrian",
        "title": "Calabrian",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "FR",
          "IT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "calligraphy",
        "title": "Calligraphy",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "BE",
          "BR",
          "ES",
          "IT",
          "NL",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cambodian",
        "title": "Cambodian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "DK",
          "ES",
          "FI",
          "PT",
          "TR"
        ]
      },
      {
        "alias": "campgrounds",
        "title": "Campgrounds",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "candlestores",
        "title": "Candle Stores",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "candy",
        "title": "Candy Stores",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "cannabis_clinics",
        "title": "Cannabis Clinics",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "NL",
          "CA",
          "TR",
          "IT",
          "US",
          "GB",
          "IE",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cannabiscollective",
        "title": "Cannabis Collective",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "CA",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cannabisdispensaries",
        "title": "Cannabis Dispensaries",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [
          "US",
          "CA"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cannabisreferrals",
        "title": "Medical Cannabis Referrals",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "US",
          "CA"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cannabistours",
        "title": "Cannabis Tours",
        "parent_aliases": [
          "cannabis_clinics"
        ],
        "country_whitelist": [
          "US",
          "CA"
        ],
        "country_blacklist": []
      },
      {
        "alias": "canteen",
        "title": "Canteen",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "CH",
          "CZ",
          "DE",
          "DK",
          "FI",
          "IT",
          "JP",
          "NL",
          "NO",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cantonese",
        "title": "Cantonese",
        "parent_aliases": [
          "chinese"
        ],
        "country_whitelist": [
          "BE",
          "FR",
          "NL",
          "SG",
          "CA",
          "JP",
          "IT",
          "US",
          "HK",
          "NZ",
          "AR",
          "AU",
          "GB",
          "TW",
          "MY",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "canyoneering",
        "title": "Canyoneering",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "car_dealers",
        "title": "Car Dealers",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "carauctions",
        "title": "Car Auctions",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "HK",
          "MY",
          "PH",
          "SG",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "carbrokers",
        "title": "Car Brokers",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "NZ",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "carbuyers",
        "title": "Car Buyers",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "BE",
          "CH",
          "NL",
          "IE",
          "CA",
          "DE",
          "US",
          "CZ",
          "NZ",
          "AU",
          "AT",
          "BR",
          "SG",
          "GB",
          "PH",
          "MY",
          "DK",
          "PL",
          "NO"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cardioclasses",
        "title": "Cardio Classes",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "cardiology",
        "title": "Cardiologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "careercounseling",
        "title": "Career Counseling",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "caribbean",
        "title": "Caribbean",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI",
          "PT",
          "TR"
        ]
      },
      {
        "alias": "caricatures",
        "title": "Caricatures",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [
          "BR",
          "DK",
          "ES",
          "IT",
          "NO",
          "PL",
          "SE",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "carousels",
        "title": "Carousels",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "carpenters",
        "title": "Carpenters",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "TR"
        ]
      },
      {
        "alias": "carpet_cleaning",
        "title": "Carpet Cleaning",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "carpetdyeing",
        "title": "Carpet Dyeing",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "US",
          "SG",
          "CA",
          "MY",
          "NZ",
          "AU",
          "GB",
          "PH",
          "IE",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "carpeting",
        "title": "Carpeting",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "carpetinstallation",
        "title": "Carpet Installation",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "carrental",
        "title": "Car Rental",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "carshares",
        "title": "Car Share Services",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "BR",
          "FI",
          "HK",
          "JP",
          "NL",
          "PT",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "carwash",
        "title": "Car Wash",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "carwindowtinting",
        "title": "Car Window Tinting",
        "parent_aliases": [
          "autoglass"
        ],
        "country_whitelist": [
          "BE",
          "NL",
          "IE",
          "CA",
          "IT",
          "US",
          "NZ",
          "AU",
          "GB",
          "SG",
          "ES"
        ],
        "country_blacklist": []
      },
      {
        "alias": "casinos",
        "title": "Casinos",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "HK",
          "JP"
        ]
      },
      {
        "alias": "castles",
        "title": "Castles",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "CH",
          "CZ",
          "DE",
          "DK",
          "ES",
          "FI",
          "FR",
          "GB",
          "IT",
          "JP",
          "NO",
          "PT",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "catalan",
        "title": "Catalan",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AR",
          "CL",
          "ES",
          "FR",
          "IT",
          "MX",
          "PT",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "catering",
        "title": "Caterers",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "cellphoneaccessories",
        "title": "Mobile Phone Accessories",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI",
          "MY",
          "PH",
          "PL",
          "TR"
        ]
      },
      {
        "alias": "centralbrazilian",
        "title": "Central Brazilian",
        "parent_aliases": [
          "brazilian"
        ],
        "country_whitelist": [
          "BR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "ceremonialclothing",
        "title": "Ceremonial Clothing",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE",
          "FR",
          "JP"
        ]
      },
      {
        "alias": "challengecourses",
        "title": "Challenge Courses",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "AT",
          "CA",
          "CH",
          "CZ",
          "DE",
          "DK",
          "FR",
          "HK",
          "NO",
          "NZ",
          "PL",
          "SE",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "champagne_bars",
        "title": "Champagne Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU"
        ]
      },
      {
        "alias": "chech",
        "title": "Chech",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "cheekufta",
        "title": "Chee Kufta",
        "parent_aliases": [
          "turkish"
        ],
        "country_whitelist": [
          "DE",
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cheerleading",
        "title": "Cheerleading",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [
          "AT",
          "CA",
          "CH",
          "DE",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cheese",
        "title": "Cheese Shops",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "cheesesteaks",
        "title": "Cheesesteaks",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AU",
          "CA",
          "GB",
          "IE",
          "NL",
          "PL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cheesetastingclasses",
        "title": "Cheese Tasting Classes",
        "parent_aliases": [
          "tastingclasses"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "chicken_wings",
        "title": "Chicken Wings",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "CH",
          "CL",
          "DK",
          "ES",
          "FI",
          "FR",
          "IT",
          "JP",
          "NL",
          "NO",
          "PT"
        ]
      },
      {
        "alias": "chickenshop",
        "title": "Chicken Shop",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "childbirthedu",
        "title": "Childbirth Education",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [
          "AU",
          "BR",
          "DK",
          "ES",
          "FR",
          "GB",
          "IE",
          "IT",
          "NO",
          "SE",
          "US",
          "BE",
          "CH",
          "NL",
          "MY",
          "CA",
          "DE",
          "NZ",
          "AT",
          "PH",
          "SG",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "childcare",
        "title": "Child Care & Day Care",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "childcloth",
        "title": "Children's Clothing",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "childproofing",
        "title": "Childproofing",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "BR",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "childrensmuseums",
        "title": "Children's Museums",
        "parent_aliases": [
          "museums"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "chilean",
        "title": "Chilean",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "BR",
          "CL",
          "FI",
          "FR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "chimneycakes",
        "title": "Chimney Cakes",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "CZ",
          "FR",
          "PL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "chimneysweeps",
        "title": "Chimney Sweeps",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "MX"
        ]
      },
      {
        "alias": "chinese",
        "title": "Chinese",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "chinesebazaar",
        "title": "Chinese Bazaar",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [
          "ES",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "chinesemartialarts",
        "title": "Chinese Martial Arts",
        "parent_aliases": [
          "martialarts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "chiropractors",
        "title": "Chiropractors",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "chocolate",
        "title": "Chocolatiers & Shops",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "choirs",
        "title": "Choirs",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "BR",
          "CA",
          "CZ",
          "NL",
          "NZ",
          "PL",
          "SG",
          "US"
        ]
      },
      {
        "alias": "christmastrees",
        "title": "Christmas Trees",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "churches",
        "title": "Churches",
        "parent_aliases": [
          "religiousorgs"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "churros",
        "title": "Churros",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "AR",
          "BR",
          "CL",
          "ES",
          "MX",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cideries",
        "title": "Cideries",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "DK",
          "FR",
          "IT",
          "JP",
          "NL",
          "NO",
          "TR"
        ]
      },
      {
        "alias": "cigarbars",
        "title": "Cigar Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "circuittraininggyms",
        "title": "Circuit Training Gyms",
        "parent_aliases": [
          "gyms"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "circusschools",
        "title": "Circus Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [
          "AR",
          "BR",
          "CL",
          "ES",
          "FI",
          "FR",
          "MX",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "civiccenter",
        "title": "Civic Center",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "climbing",
        "title": "Climbing",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "clockrepair",
        "title": "Clock Repair",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "IT",
          "JP",
          "MX"
        ]
      },
      {
        "alias": "clothingrental",
        "title": "Clothing Rental",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "clowns",
        "title": "Clowns",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "FI",
          "PL",
          "SE",
          "SG",
          "TR"
        ]
      },
      {
        "alias": "clubcrawl",
        "title": "Club Crawl",
        "parent_aliases": [
          "nightlife"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cocktailbars",
        "title": "Cocktail Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "coffee",
        "title": "Coffee & Tea",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "coffeeroasteries",
        "title": "Coffee Roasteries",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "coffeeshops",
        "title": "Coffeeshops",
        "parent_aliases": [
          "nightlife"
        ],
        "country_whitelist": [
          "NL",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "coffeeteasupplies",
        "title": "Coffee & Tea Supplies",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "BR",
          "CL",
          "CZ",
          "ES",
          "FI",
          "IT",
          "MX",
          "MY",
          "PH",
          "PT",
          "US"
        ]
      },
      {
        "alias": "collegecounseling",
        "title": "College Counseling",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "collegeuniv",
        "title": "Colleges & Universities",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "colombian",
        "title": "Colombian",
        "parent_aliases": [
          "latin"
        ],
        "country_whitelist": [
          "AR",
          "BE",
          "CA",
          "CL",
          "ES",
          "FI",
          "FR",
          "MX",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "colonics",
        "title": "Colonics",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "AU",
          "CA",
          "DK",
          "GB",
          "IE",
          "NO",
          "NZ",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "comedyclubs",
        "title": "Comedy Clubs",
        "parent_aliases": [
          "nightlife"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "comfortfood",
        "title": "Comfort Food",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AR",
          "CA",
          "CL",
          "FI",
          "JP",
          "MX",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "comicbooks",
        "title": "Comic Books",
        "parent_aliases": [
          "media"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "commercialrealestate",
        "title": "Commercial Real Estate",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "BR",
          "CA",
          "CZ",
          "DE",
          "DK",
          "NL",
          "NO",
          "PL",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "commissionedartists",
        "title": "Commissioned Artists",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "communitybookbox",
        "title": "Community Book Box",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "ES",
          "FR",
          "IT",
          "JP",
          "MX",
          "MY",
          "PH"
        ]
      },
      {
        "alias": "communitycenters",
        "title": "Community Centers",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [
          "BR",
          "CA",
          "CZ",
          "DK",
          "GB",
          "IE",
          "NO",
          "PT",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "communitygardens",
        "title": "Community Gardens",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "AU",
          "BR",
          "DE",
          "DK",
          "ES",
          "FR",
          "NO",
          "PT",
          "SE",
          "SG",
          "US",
          "CA",
          "NZ",
          "IE",
          "IT",
          "GB"
        ],
        "country_blacklist": []
      },
      {
        "alias": "computers",
        "title": "Computers",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "concept_shops",
        "title": "Concept Shops",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "BR",
          "CA",
          "CL",
          "ES",
          "HK",
          "IT",
          "JP",
          "NZ",
          "PL",
          "SE",
          "SG",
          "TR",
          "US"
        ]
      },
      {
        "alias": "conciergemedicine",
        "title": "Concierge Medicine",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "condominiums",
        "title": "Condominiums",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "NZ"
        ]
      },
      {
        "alias": "congee",
        "title": "Congee",
        "parent_aliases": [
          "chinese"
        ],
        "country_whitelist": [
          "HK",
          "MY",
          "SG",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "consumerlaw",
        "title": "Consumer Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "DK",
          "ES",
          "FI",
          "HK",
          "JP",
          "NO",
          "SE",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "contractlaw",
        "title": "Contract Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "contractors",
        "title": "General Contractors",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "convenience",
        "title": "Convenience Stores",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI"
        ]
      },
      {
        "alias": "conveyorsushi",
        "title": "Conveyor Belt Sushi",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "CH",
          "DE",
          "HK",
          "IT",
          "JP",
          "NL",
          "PL",
          "SE",
          "SG",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cookingclasses",
        "title": "Cooking Classes",
        "parent_aliases": [
          "artsandcrafts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "cookingschools",
        "title": "Cooking Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "copyshops",
        "title": "Printing Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "corsican",
        "title": "Corsican",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "BE",
          "FR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cosmeticdentists",
        "title": "Cosmetic Dentists",
        "parent_aliases": [
          "dentists"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "cosmetics",
        "title": "Cosmetics & Beauty Supply",
        "parent_aliases": [
          "beautysvc",
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "cosmeticsurgeons",
        "title": "Cosmetic Surgeons",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "cosmetology_schools",
        "title": "Cosmetology Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "costumes",
        "title": "Costumes",
        "parent_aliases": [
          "artsandcrafts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "countertopinstall",
        "title": "Countertop Installation",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "CZ",
          "DE",
          "FR",
          "IT"
        ]
      },
      {
        "alias": "countryclubs",
        "title": "Country Clubs",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [
          "AR",
          "BR",
          "CL",
          "ES",
          "HK",
          "IT",
          "JP",
          "MX",
          "SG",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "countrydancehalls",
        "title": "Country Dance Halls",
        "parent_aliases": [
          "nightlife"
        ],
        "country_whitelist": [
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "couriers",
        "title": "Couriers & Delivery Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "courthouses",
        "title": "Courthouses",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CA",
          "CL",
          "ES",
          "FI",
          "GB",
          "HK",
          "IE",
          "JP",
          "MX",
          "MY",
          "NZ",
          "PH",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "courtreporters",
        "title": "Court Reporters",
        "parent_aliases": [
          "legalservices"
        ],
        "country_whitelist": [
          "BE",
          "CA",
          "NL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cprclasses",
        "title": "CPR Classes",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [
          "AU",
          "PT",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "craneservices",
        "title": "Crane Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI",
          "FR",
          "HK",
          "JP",
          "MY",
          "PH",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "cremationservices",
        "title": "Cremation Services",
        "parent_aliases": [
          "funeralservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "TR"
        ]
      },
      {
        "alias": "creperies",
        "title": "Creperies",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "criminaldefense",
        "title": "Criminal Defense Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "crisispregnancycenters",
        "title": "Crisis Pregnancy Centers",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "US",
          "CA"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cryotherapy",
        "title": "Cryotherapy",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "IT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "csa",
        "title": "CSA",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE",
          "FR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "cuban",
        "title": "Cuban",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "DK",
          "SG",
          "TR"
        ]
      },
      {
        "alias": "cucinacampana",
        "title": "Cucina campana",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "culturalcenter",
        "title": "Cultural Center",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CA",
          "IE",
          "NZ",
          "TR"
        ]
      },
      {
        "alias": "cupcakes",
        "title": "Cupcakes",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CA",
          "CZ",
          "ES",
          "TR"
        ]
      },
      {
        "alias": "currencyexchange",
        "title": "Currency Exchange",
        "parent_aliases": [
          "financialservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "currysausage",
        "title": "Curry Sausage",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "customcakes",
        "title": "Custom Cakes",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE",
          "FR"
        ]
      },
      {
        "alias": "custommerchandise",
        "title": "Customized Merchandise",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "customsbrokers",
        "title": "Customs Brokers",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "cyclingclasses",
        "title": "Cycling Classes",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "BR",
          "CA",
          "IE",
          "MX",
          "NZ",
          "PT"
        ]
      },
      {
        "alias": "cypriot",
        "title": "Cypriot",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "czech",
        "title": "Czech",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "CA",
          "CZ",
          "DE",
          "DK",
          "FI",
          "FR",
          "GB",
          "IE",
          "IT",
          "NO",
          "PL",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "czechslovakian",
        "title": "Czech/Slovakian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AR",
          "MX",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "dagashi",
        "title": "Dagashi",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "damagerestoration",
        "title": "Damage Restoration",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "AU",
          "CA",
          "NZ",
          "PT",
          "SG",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "dance_schools",
        "title": "Dance Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "danceclubs",
        "title": "Dance Clubs",
        "parent_aliases": [
          "nightlife"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "dancerestaurants",
        "title": "Dance Restaurants",
        "parent_aliases": [
          "nightlife"
        ],
        "country_whitelist": [
          "FI"
        ],
        "country_blacklist": []
      },
      {
        "alias": "dancestudio",
        "title": "Dance Studios",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "dancewear",
        "title": "Dance Wear",
        "parent_aliases": [
          "sportswear"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "danish",
        "title": "Danish",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "DK",
          "FR",
          "NO",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "dartarenas",
        "title": "Dart Arenas",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE",
          "PL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "datarecovery",
        "title": "Data Recovery",
        "parent_aliases": [
          "itservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI",
          "HK",
          "JP",
          "MY",
          "NL",
          "PH",
          "TW"
        ]
      },
      {
        "alias": "daycamps",
        "title": "Day Camps",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "HK",
          "JP",
          "MX"
        ]
      },
      {
        "alias": "debtrelief",
        "title": "Debt Relief Services",
        "parent_aliases": [
          "financialservices"
        ],
        "country_whitelist": [
          "CA",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "decksrailing",
        "title": "Decks & Railing",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "delicatessen",
        "title": "Delicatessen",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "US"
        ]
      },
      {
        "alias": "delis",
        "title": "Delis",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "CL",
          "FR",
          "IT",
          "NL",
          "PT",
          "SE"
        ]
      },
      {
        "alias": "demolitionservices",
        "title": "Demolition Services",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "AT",
          "AU",
          "BE",
          "BR",
          "CH",
          "CZ",
          "DE",
          "DK",
          "ES",
          "IT",
          "NL",
          "NO",
          "PL",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "dentalhygeiniststorefront",
        "title": "Storefront Clinics",
        "parent_aliases": [
          "dentalhygienists"
        ],
        "country_whitelist": [
          "CA"
        ],
        "country_blacklist": []
      },
      {
        "alias": "dentalhygienists",
        "title": "Dental Hygienists",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "CA",
          "DE",
          "DK",
          "NL",
          "NO",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "dentalhygienistsmobile",
        "title": "Mobile Clinics",
        "parent_aliases": [
          "dentalhygienists"
        ],
        "country_whitelist": [
          "CA"
        ],
        "country_blacklist": []
      },
      {
        "alias": "dentists",
        "title": "Dentists",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "departmentsofmotorvehicles",
        "title": "Departments of Motor Vehicles",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "FR"
        ]
      },
      {
        "alias": "deptstores",
        "title": "Department Stores",
        "parent_aliases": [
          "shopping",
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "dermatology",
        "title": "Dermatologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "desserts",
        "title": "Desserts",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "diagnosticimaging",
        "title": "Diagnostic Imaging",
        "parent_aliases": [
          "diagnosticservices"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "BR",
          "CA",
          "CL",
          "ES",
          "FR",
          "GB",
          "IE",
          "MX",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "diagnosticservices",
        "title": "Diagnostic Services",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "dialysisclinics",
        "title": "Dialysis Clinics",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "AR",
          "BR",
          "CL",
          "ES",
          "IT",
          "MX",
          "PT",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "diamondbuyers",
        "title": "Diamond Buyers",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "dietitians",
        "title": "Dietitians",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "digitizingservices",
        "title": "Digitizing Services",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [
          "BR",
          "DK",
          "NO",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "dimsum",
        "title": "Dim Sum",
        "parent_aliases": [
          "chinese"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "PT",
          "TR"
        ]
      },
      {
        "alias": "diners",
        "title": "Diners",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "CZ",
          "FI",
          "SE"
        ]
      },
      {
        "alias": "dinnertheater",
        "title": "Dinner Theater",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "FR",
          "IT",
          "JP",
          "NL"
        ]
      },
      {
        "alias": "disabilitylaw",
        "title": "Disability Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "discgolf",
        "title": "Disc Golf",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "DK",
          "SG"
        ]
      },
      {
        "alias": "discountstore",
        "title": "Discount Store",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "distilleries",
        "title": "Distilleries",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "divebars",
        "title": "Dive Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "BE",
          "CZ",
          "FR",
          "IT",
          "NL"
        ]
      },
      {
        "alias": "diveshops",
        "title": "Dive Shops",
        "parent_aliases": [
          "sportgoods"
        ],
        "country_whitelist": [
          "AR",
          "AT",
          "AU",
          "BR",
          "CH",
          "CL",
          "DE",
          "ES",
          "IT",
          "JP",
          "MX",
          "NZ",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "diving",
        "title": "Diving",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "divorce",
        "title": "Divorce & Family Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "diyautoshop",
        "title": "DIY Auto Shop",
        "parent_aliases": [
          "autorepair"
        ],
        "country_whitelist": [
          "AT",
          "AU",
          "CH",
          "DE",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "diyfood",
        "title": "Do-It-Yourself Food",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "CL",
          "CZ",
          "DE",
          "ES",
          "FI",
          "FR",
          "IT",
          "MX",
          "NZ",
          "SE"
        ]
      },
      {
        "alias": "djs",
        "title": "DJs",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "dog_parks",
        "title": "Dog Parks",
        "parent_aliases": [
          "parks"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "dogwalkers",
        "title": "Dog Walkers",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "dolmusstation",
        "title": "Dolmus Station",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "dominican",
        "title": "Dominican",
        "parent_aliases": [
          "caribbean"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "donairs",
        "title": "Donairs",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "BE",
          "CA",
          "CZ",
          "DK",
          "FR",
          "PL",
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "donationcenter",
        "title": "Donation Center",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "BR",
          "CH",
          "DE",
          "DK",
          "ES",
          "NL",
          "NO",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "donburi",
        "title": "Donburi",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "HK",
          "JP",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "donuts",
        "title": "Donuts",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "ES"
        ]
      },
      {
        "alias": "doorsales",
        "title": "Door Sales/Installation",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "DK",
          "ES",
          "FI",
          "FR",
          "HK",
          "IE",
          "JP",
          "MX",
          "MY",
          "NO",
          "PH",
          "SE",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "doulas",
        "title": "Doulas",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "BE",
          "CA",
          "CZ",
          "FR",
          "IT",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "dramaschools",
        "title": "Drama Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "driedfruit",
        "title": "Dried Fruit",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [
          "AR",
          "BR",
          "CL",
          "CZ",
          "ES",
          "HK",
          "JP",
          "MX",
          "PL",
          "SE",
          "TR",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "driveintheater",
        "title": "Drive-In Theater",
        "parent_aliases": [
          "movietheaters"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "FR",
          "MX",
          "PL"
        ]
      },
      {
        "alias": "drivethrubars",
        "title": "Drive-Thru Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "driving_schools",
        "title": "Driving Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "drones",
        "title": "Drones",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "drugstores",
        "title": "Drugstores",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR",
          "DK",
          "NO",
          "CL",
          "TR",
          "AR",
          "MX",
          "SE"
        ]
      },
      {
        "alias": "dryclean",
        "title": "Dry Cleaning",
        "parent_aliases": [
          "laundryservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "drycleaninglaundry",
        "title": "Dry Cleaning & Laundry",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "drywall",
        "title": "Drywall Installation & Repair",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "HK",
          "JP"
        ]
      },
      {
        "alias": "duilawyers",
        "title": "DUI Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [
          "CA",
          "DE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "duischools",
        "title": "DUI Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "dumplings",
        "title": "Dumplings",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "JP",
          "BE",
          "CH",
          "NL",
          "SG",
          "CA",
          "DE",
          "NZ",
          "AU",
          "GB",
          "IE",
          "PL",
          "AT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "dumpsterrental",
        "title": "Dumpster Rental",
        "parent_aliases": [
          "junkremovalandhauling"
        ],
        "country_whitelist": [
          "CH",
          "DK",
          "NO",
          "IE",
          "CA",
          "DE",
          "US",
          "HK",
          "NZ",
          "AU",
          "AT",
          "SG",
          "GB",
          "BE",
          "NL",
          "AU",
          "PH",
          "MY",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "duplicationservices",
        "title": "Duplication Services",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "dutyfreeshops",
        "title": "Duty-Free Shops",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "earnosethroat",
        "title": "Ear Nose & Throat",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "eastern_european",
        "title": "Eastern European",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AU",
          "CZ",
          "DK",
          "FR",
          "NO"
        ],
        "country_blacklist": []
      },
      {
        "alias": "easterngerman",
        "title": "Eastern German",
        "parent_aliases": [
          "german"
        ],
        "country_whitelist": [
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "easternmexican",
        "title": "Eastern Mexican",
        "parent_aliases": [
          "mexican"
        ],
        "country_whitelist": [
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "eatertainment",
        "title": "Eatertainment",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "BR",
          "CH",
          "DE",
          "NL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "editorialservices",
        "title": "Editorial Services",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [
          "AR",
          "BE",
          "BR",
          "CL",
          "DE",
          "DK",
          "ES",
          "FR",
          "IT",
          "MX",
          "NL",
          "NO",
          "PT",
          "US",
          "CH",
          "MY",
          "CA",
          "NZ",
          "AU",
          "GB",
          "SG",
          "PH",
          "IE",
          "PL",
          "AT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "education",
        "title": "Education",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "educationservices",
        "title": "Educational Services",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR"
        ]
      },
      {
        "alias": "egyptian",
        "title": "Egyptian",
        "parent_aliases": [
          "mideastern"
        ],
        "country_whitelist": [
          "BE",
          "CA",
          "FR",
          "IT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "eldercareplanning",
        "title": "Elder Care Planning",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "elderlaw",
        "title": "Elder Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [
          "AT",
          "BR",
          "CH",
          "DE",
          "PL",
          "PT",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "electricians",
        "title": "Electricians",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "electricitysuppliers",
        "title": "Electricity Suppliers",
        "parent_aliases": [
          "utilities"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "electronics",
        "title": "Electronics",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "electronicsrepair",
        "title": "Electronics Repair",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "elementaryschools",
        "title": "Elementary Schools",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "elevatorservices",
        "title": "Elevator Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "CZ",
          "FI",
          "FR",
          "JP",
          "MX",
          "MY",
          "PH"
        ]
      },
      {
        "alias": "eltern_cafes",
        "title": "Parent Cafes",
        "parent_aliases": [
          "food",
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "embassy",
        "title": "Embassy",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "TR"
        ]
      },
      {
        "alias": "embroideryandcrochet",
        "title": "Embroidery & Crochet",
        "parent_aliases": [
          "artsandcrafts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "emergencymedicine",
        "title": "Emergency Medicine",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "emergencypethospital",
        "title": "Emergency Pet Hospital",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "emergencyrooms",
        "title": "Emergency Rooms",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "emilian",
        "title": "Emilian",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "empanadas",
        "title": "Empanadas",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "AR",
          "CL",
          "ES",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "employmentagencies",
        "title": "Employment Agencies",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "employmentlawyers",
        "title": "Employment Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "emstraining",
        "title": "EMS Training",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE",
          "ES",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "endocrinologists",
        "title": "Endocrinologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "CA",
          "FI",
          "GB",
          "HK",
          "IE",
          "JP",
          "NZ",
          "PL",
          "SE",
          "SG",
          "TW"
        ]
      },
      {
        "alias": "endodontists",
        "title": "Endodontists",
        "parent_aliases": [
          "dentists"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "engraving",
        "title": "Engraving",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "entertainmentlaw",
        "title": "Entertainment Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "enviroabatement",
        "title": "Environmental Abatement",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "environmentaltesting",
        "title": "Environmental Testing",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "CA",
          "DK",
          "FI",
          "GB",
          "IE",
          "NL",
          "NO",
          "NZ",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "eritrean",
        "title": "Eritrean",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE",
          "IT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "eroticmassage",
        "title": "Erotic Massage",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CL",
          "DK",
          "FI",
          "HK",
          "JP",
          "MY",
          "NO",
          "PH",
          "SE",
          "TR",
          "TW",
          "US"
        ]
      },
      {
        "alias": "escapegames",
        "title": "Escape Games",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "estateliquidation",
        "title": "Estate Liquidation",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "estatephotography",
        "title": "Real Estate Photography",
        "parent_aliases": [
          "realestatesvcs"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "IT",
          "JP"
        ]
      },
      {
        "alias": "estateplanning",
        "title": "Estate Planning Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "NO",
          "SE"
        ]
      },
      {
        "alias": "estheticians",
        "title": "Estheticians",
        "parent_aliases": [
          "skincare"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "ethicgrocery",
        "title": "Ethical Grocery",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "BE",
          "CH",
          "CZ",
          "DE",
          "FR",
          "JP",
          "MY",
          "NL",
          "PH",
          "TR",
          "US"
        ]
      },
      {
        "alias": "ethiopian",
        "title": "Ethiopian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "MX",
          "SG",
          "TR"
        ]
      },
      {
        "alias": "ethnicgrocery",
        "title": "Ethnic Grocery",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "ethnicmarkets",
        "title": "Ethnic Food",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "evchargingstations",
        "title": "EV Charging Stations",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "eventphotography",
        "title": "Event Photography",
        "parent_aliases": [
          "photographers"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "eventplanning",
        "title": "Party & Event Planning",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "eventservices",
        "title": "Event Planning & Services",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "excavationservices",
        "title": "Excavation Services",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "experiences",
        "title": "Experiences",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "CZ",
          "DE",
          "DK",
          "NO",
          "PT",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "eyebrowservices",
        "title": "Eyebrow Services",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "eyelashservice",
        "title": "Eyelash Service",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "IT"
        ]
      },
      {
        "alias": "fabricstores",
        "title": "Fabric Stores",
        "parent_aliases": [
          "artsandcrafts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "facepainting",
        "title": "Face Painting",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "ES",
          "FI",
          "FR",
          "HK",
          "IT",
          "JP",
          "MX",
          "MY",
          "PH",
          "PL",
          "SE",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "fado_houses",
        "title": "Fado Houses",
        "parent_aliases": [
          "portuguese"
        ],
        "country_whitelist": [
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "faithbasedcpc",
        "title": "Faith-based Crisis Pregnancy Centers",
        "parent_aliases": [
          "crisispregnancycenters"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "falafel",
        "title": "Falafel",
        "parent_aliases": [
          "mediterranean"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "MX",
          "PT"
        ]
      },
      {
        "alias": "familydr",
        "title": "Family Practice",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR"
        ]
      },
      {
        "alias": "farmequipmentrepair",
        "title": "Farm Equipment Repair",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "farmersmarket",
        "title": "Farmers Market",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "farmingequipment",
        "title": "Farming Equipment",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "farms",
        "title": "Farms",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "farriers",
        "title": "Farriers",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "fashion",
        "title": "Fashion",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "fasil",
        "title": "Fasil Music",
        "parent_aliases": [
          "nightlife"
        ],
        "country_whitelist": [
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "fencesgates",
        "title": "Fences & Gates",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "fencing",
        "title": "Fencing Clubs",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "fengshui",
        "title": "Feng Shui",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "ferries",
        "title": "Ferries",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "fertility",
        "title": "Fertility",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "festivals",
        "title": "Festivals",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "filipino",
        "title": "Filipino",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "DK",
          "FI",
          "TR"
        ]
      },
      {
        "alias": "financialadvising",
        "title": "Financial Advising",
        "parent_aliases": [
          "financialservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "financialservices",
        "title": "Financial Services",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "fingerprinting",
        "title": "Fingerprinting",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "firearmtraining",
        "title": "Firearm Training",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "firedepartments",
        "title": "Fire Departments",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CA",
          "GB",
          "IE",
          "NZ",
          "SG"
        ]
      },
      {
        "alias": "fireplace",
        "title": "Fireplace Services",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "fireprotection",
        "title": "Fire Protection Services",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "firewood",
        "title": "Firewood",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "CZ",
          "HK",
          "JP",
          "MY",
          "NL",
          "PH",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "fireworks",
        "title": "Fireworks",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "CA",
          "CL",
          "CZ",
          "GB",
          "MX",
          "NZ",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "firstaidclasses",
        "title": "First Aid Classes",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "BR",
          "FR",
          "IE",
          "NL",
          "NZ",
          "SG"
        ]
      },
      {
        "alias": "fischbroetchen",
        "title": "Fischbroetchen",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "fishing",
        "title": "Fishing",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "fishmonger",
        "title": "Fishmonger",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "AT",
          "AU",
          "BE",
          "CZ",
          "DE",
          "DK",
          "FI",
          "IT",
          "NL",
          "NO",
          "PL",
          "PT",
          "SE",
          "CH"
        ],
        "country_blacklist": []
      },
      {
        "alias": "fishnchips",
        "title": "Fish & Chips",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "PT"
        ]
      },
      {
        "alias": "fitness",
        "title": "Fitness & Instruction",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "fitnessequipment",
        "title": "Fitness/Exercise Equipment",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "flatbread",
        "title": "Flatbread",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE",
          "DK",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "fleamarkets",
        "title": "Flea Markets",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "flemish",
        "title": "Flemish",
        "parent_aliases": [
          "belgian"
        ],
        "country_whitelist": [
          "FR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "flightinstruction",
        "title": "Flight Instruction",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "floatspa",
        "title": "Float Spa",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR",
          "IT",
          "JP"
        ]
      },
      {
        "alias": "flooring",
        "title": "Flooring",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "floraldesigners",
        "title": "Floral Designers",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "florists",
        "title": "Florists",
        "parent_aliases": [
          "flowers"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "flowers",
        "title": "Flowers & Gifts",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "flowersonly",
        "title": "Flowers",
        "parent_aliases": [
          "flowers"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "flyboarding",
        "title": "Flyboarding",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "fondue",
        "title": "Fondue",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "DK",
          "ES"
        ]
      },
      {
        "alias": "food",
        "title": "Food",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "food_court",
        "title": "Food Court",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI",
          "FR",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "foodbanks",
        "title": "Food Banks",
        "parent_aliases": [
          "nonprofit"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "fooddeliveryservices",
        "title": "Food Delivery Services",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "foodsafety",
        "title": "Food Safety Training",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [
          "BR",
          "PT",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "foodstands",
        "title": "Food Stands",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "foodtours",
        "title": "Food Tours",
        "parent_aliases": [
          "tours"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "foodtrucks",
        "title": "Food Trucks",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "SG"
        ]
      },
      {
        "alias": "football",
        "title": "Soccer",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "footcare",
        "title": "Foot Care",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [
          "AT",
          "AU",
          "BE",
          "CA",
          "CH",
          "DE",
          "GB",
          "IE",
          "IT",
          "JP",
          "MY",
          "NL",
          "NZ",
          "PH",
          "SG"
        ],
        "country_blacklist": []
      },
      {
        "alias": "forestry",
        "title": "Forestry",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "CA",
          "CZ",
          "DK",
          "FI",
          "NO",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "formalwear",
        "title": "Formal Wear",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CH",
          "FI",
          "HK",
          "IT",
          "JP",
          "MY",
          "PH",
          "SE",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "foundationrepair",
        "title": "Foundation Repair",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE"
        ]
      },
      {
        "alias": "framing",
        "title": "Framing",
        "parent_aliases": [
          "artsandcrafts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "franconian",
        "title": "Franconian",
        "parent_aliases": [
          "german"
        ],
        "country_whitelist": [
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "freediving",
        "title": "Free Diving",
        "parent_aliases": [
          "diving"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "freiduria",
        "title": "Freiduria",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AR",
          "CL",
          "ES",
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "french",
        "title": "French",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "friterie",
        "title": "Friterie",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "FR",
          "IT",
          "NL",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "friulan",
        "title": "Friulan",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "frozenfood",
        "title": "Frozen Food",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [
          "BE",
          "ES",
          "FR",
          "GB",
          "IT",
          "SG"
        ],
        "country_blacklist": []
      },
      {
        "alias": "fueldocks",
        "title": "Fuel Docks",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "DK",
          "ES",
          "MX",
          "NO",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "funeralservices",
        "title": "Funeral Services & Cemeteries",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "funfair",
        "title": "Fun Fair",
        "parent_aliases": [
          "festivals"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "CH",
          "CZ",
          "DE",
          "DK",
          "NL",
          "NO",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "furclothing",
        "title": "Fur Clothing",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "furniture",
        "title": "Furniture Stores",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "furnitureassembly",
        "title": "Furniture Assembly",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "furniturerepair",
        "title": "Furniture Repair",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "fuzhou",
        "title": "Fuzhou",
        "parent_aliases": [
          "chinese"
        ],
        "country_whitelist": [
          "HK",
          "MY",
          "SG",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "galician",
        "title": "Galician",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "ES",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "galleries",
        "title": "Art Galleries",
        "parent_aliases": [
          "arts",
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gamemeat",
        "title": "Game Meat",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "BR",
          "CA",
          "CL",
          "FI",
          "HK",
          "JP",
          "MX",
          "MY",
          "PH",
          "PT",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "gametruckrental",
        "title": "Game Truck Rental",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [
          "AR",
          "CA",
          "CL",
          "MX",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "garage_door_services",
        "title": "Garage Door Services",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "AT",
          "CH",
          "CL",
          "DE",
          "HK",
          "JP",
          "MY",
          "PH",
          "PL",
          "SE",
          "TW"
        ]
      },
      {
        "alias": "gardeners",
        "title": "Gardeners",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gardening",
        "title": "Nurseries & Gardening",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gardens",
        "title": "Botanical Gardens",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gasstations",
        "title": "Gas Stations",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gastroenterologist",
        "title": "Gastroenterologist",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gastropubs",
        "title": "Gastropubs",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gaybars",
        "title": "Gay Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gelato",
        "title": "Gelato",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "AU",
          "CZ",
          "DK",
          "IT",
          "NO",
          "PH",
          "PL",
          "PT",
          "SE",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "gemstonesandminerals",
        "title": "Gemstones & Minerals",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "general_litigation",
        "title": "General Litigation",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "generaldentistry",
        "title": "General Dentistry",
        "parent_aliases": [
          "dentists"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "generalfestivals",
        "title": "General Festivals",
        "parent_aliases": [
          "festivals"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE",
          "JP",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "generatorinstallrepair",
        "title": "Generator Installation/Repair",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "geneticists",
        "title": "Geneticists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "georgian",
        "title": "Georgian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "CH",
          "DE",
          "US",
          "CZ",
          "AT",
          "FI",
          "PL",
          "GB"
        ],
        "country_blacklist": []
      },
      {
        "alias": "german",
        "title": "German",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gerontologist",
        "title": "Gerontologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gestorias",
        "title": "Gestorias",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "AR",
          "CL",
          "ES",
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "giblets",
        "title": "Giblets",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "giftshops",
        "title": "Gift Shops",
        "parent_aliases": [
          "flowers"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "PL",
          "SG",
          "TR"
        ]
      },
      {
        "alias": "glassandmirrors",
        "title": "Glass & Mirrors",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "TR"
        ]
      },
      {
        "alias": "glassblowing",
        "title": "Glass Blowing",
        "parent_aliases": [
          "artclasses"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE"
        ]
      },
      {
        "alias": "gliding",
        "title": "Gliding",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "CZ",
          "DE",
          "FR",
          "NO",
          "PL",
          "PT",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "gluhwein",
        "title": "Mulled Wine",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "CZ",
          "DE",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "gluten_free",
        "title": "Gluten-Free",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gokarts",
        "title": "Go Karts",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "goldbuyers",
        "title": "Gold Buyers",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "BR",
          "CA",
          "CH",
          "DE",
          "ES",
          "FR",
          "IT",
          "NL",
          "PT",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "golf",
        "title": "Golf",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "golfcartdealers",
        "title": "Golf Cart Dealers",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "CA",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "golfcartrentals",
        "title": "Golf Cart Rentals",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [
          "US",
          "PR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "golfequipment",
        "title": "Golf Equipment",
        "parent_aliases": [
          "sportgoods"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "CA",
          "DE",
          "NL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "golflessons",
        "title": "Golf Lessons",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "BR",
          "CA",
          "CH",
          "DE",
          "FI",
          "HK",
          "IE",
          "MY",
          "PH",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "golfshops",
        "title": "Golf Equipment Shops",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gourmet",
        "title": "Specialty Food",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gozleme",
        "title": "Gozleme",
        "parent_aliases": [
          "turkish"
        ],
        "country_whitelist": [
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "graphicdesign",
        "title": "Graphic Design",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "greek",
        "title": "Greek",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "grillingequipment",
        "title": "Grilling Equipment",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "grillservices",
        "title": "Grill Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "AR",
          "AT",
          "BR",
          "CH",
          "CL",
          "DE",
          "ES",
          "MX",
          "PL",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "grocery",
        "title": "Grocery",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "groomer",
        "title": "Pet Groomers",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "groutservices",
        "title": "Grout Services",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "guamanian",
        "title": "Guamanian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "FR",
          "JP",
          "MX",
          "PL",
          "TR"
        ]
      },
      {
        "alias": "guesthouses",
        "title": "Guest Houses",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "SG"
        ]
      },
      {
        "alias": "guitarstores",
        "title": "Guitar Stores",
        "parent_aliases": [
          "musicinstrumentservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gun_ranges",
        "title": "Gun/Rifle Ranges",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "BE",
          "CH",
          "SG"
        ]
      },
      {
        "alias": "guns_and_ammo",
        "title": "Guns & Ammo",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [
          "AR",
          "AT",
          "CA",
          "CH",
          "CL",
          "DE",
          "ES",
          "MX",
          "MY",
          "PH",
          "PL",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "gunsmith",
        "title": "Gunsmith",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "BE",
          "BR",
          "CH",
          "DE",
          "HK",
          "JP",
          "NL",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "gutterservices",
        "title": "Gutter Services",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "MX"
        ]
      },
      {
        "alias": "gymnastics",
        "title": "Gymnastics",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "BR",
          "CA",
          "CZ",
          "DK",
          "MX",
          "NO",
          "NZ",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "gyms",
        "title": "Gyms",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "gyudon",
        "title": "Gyudon",
        "parent_aliases": [
          "donburi"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "habilitativeservices",
        "title": "Habilitative Services",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hainan",
        "title": "Hainan",
        "parent_aliases": [
          "chinese"
        ],
        "country_whitelist": [
          "HK",
          "MY",
          "PH",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hair",
        "title": "Hair Salons",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hair_extensions",
        "title": "Hair Extensions",
        "parent_aliases": [
          "beautysvc",
          "hair"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "HK",
          "NL",
          "PL",
          "TR"
        ]
      },
      {
        "alias": "hairloss",
        "title": "Hair Loss Centers",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hairremoval",
        "title": "Hair Removal",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hairstylists",
        "title": "Hair Stylists",
        "parent_aliases": [
          "hair"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "BE",
          "CL",
          "CZ",
          "DK",
          "ES",
          "MX",
          "NL",
          "NO",
          "PT",
          "SE",
          "SG",
          "US",
          "CA",
          "IE",
          "GB",
          "CH",
          "HK",
          "TW",
          "PL",
          "DE",
          "AT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "haitian",
        "title": "Haitian",
        "parent_aliases": [
          "caribbean"
        ],
        "country_whitelist": [
          "CA",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hakka",
        "title": "Hakka",
        "parent_aliases": [
          "chinese"
        ],
        "country_whitelist": [
          "CA",
          "HK",
          "MY",
          "PH",
          "SG",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "halal",
        "title": "Halal",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "PT",
          "TR"
        ]
      },
      {
        "alias": "halfwayhouses",
        "title": "Halfway Houses",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "halotherapy",
        "title": "Halotherapy",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "handball",
        "title": "Handball",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "CA",
          "CZ",
          "DE",
          "GB",
          "HK",
          "IE",
          "MX",
          "MY",
          "NZ",
          "PH",
          "PT",
          "SG",
          "TR",
          "TW",
          "US"
        ]
      },
      {
        "alias": "handrolls",
        "title": "Hand Rolls",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "BR",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "handyman",
        "title": "Handyman",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hanggliding",
        "title": "Hang Gliding",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CA",
          "CZ",
          "DE",
          "DK",
          "FI",
          "GB",
          "HK",
          "IE",
          "MY",
          "NL",
          "PH",
          "PL",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "hardware",
        "title": "Hardware Stores",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hats",
        "title": "Hats",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "GB",
          "HK",
          "IE",
          "JP",
          "PL",
          "SE",
          "TR"
        ]
      },
      {
        "alias": "hauntedhouses",
        "title": "Haunted Houses",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hawaiian",
        "title": "Hawaiian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "CZ",
          "DK",
          "PT",
          "TR"
        ]
      },
      {
        "alias": "hawkercentre",
        "title": "Hawker Centre",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "HK",
          "MY",
          "PH",
          "SG",
          "TW",
          "AR",
          "MX",
          "CL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hazardouswastedisposal",
        "title": "Hazardous Waste Disposal",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "BR",
          "CH",
          "CZ",
          "DE",
          "FR",
          "HK",
          "JP",
          "MY",
          "PH",
          "PT",
          "SE",
          "TR"
        ]
      },
      {
        "alias": "headshops",
        "title": "Head Shops",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "health",
        "title": "Health & Medical",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "healthcoach",
        "title": "Health Coach",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "healthinsurance",
        "title": "Health Insurance Offices",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "BR",
          "CZ",
          "DE",
          "FR",
          "MX",
          "NZ",
          "PT",
          "SG",
          "US",
          "CH",
          "AT",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "healthmarkets",
        "title": "Health Markets",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "healthretreats",
        "title": "Health Retreats",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "MX"
        ]
      },
      {
        "alias": "healthtrainers",
        "title": "Trainers",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hearing_aids",
        "title": "Hearing Aids",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "AR",
          "AT",
          "BR",
          "CH",
          "CL",
          "CZ",
          "DE",
          "DK",
          "ES",
          "FI",
          "FR",
          "MX",
          "NO",
          "PL",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hearingaidproviders",
        "title": "Hearing Aid Providers",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "AT",
          "CH",
          "CL",
          "CZ",
          "DE",
          "ES",
          "HK",
          "JP",
          "MX",
          "SE",
          "TR"
        ]
      },
      {
        "alias": "henghwa",
        "title": "Henghwa",
        "parent_aliases": [
          "chinese"
        ],
        "country_whitelist": [
          "HK",
          "MY",
          "SG",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hennaartists",
        "title": "Henna Artists",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [
          "AU",
          "BR",
          "FR",
          "IT",
          "NZ",
          "US",
          "CH",
          "DK",
          "NO",
          "CA",
          "DE",
          "AT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hepatologists",
        "title": "Hepatologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "herbalshops",
        "title": "Herbal Shops",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "herbsandspices",
        "title": "Herbs & Spices",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hessian",
        "title": "Hessian",
        "parent_aliases": [
          "german"
        ],
        "country_whitelist": [
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "heuriger",
        "title": "Heuriger",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hifi",
        "title": "High Fidelity Audio Equipment",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "highschools",
        "title": "Middle Schools & High Schools",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hiking",
        "title": "Hiking",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "himalayan",
        "title": "Himalayan/Nepalese",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hindu_temples",
        "title": "Hindu Temples",
        "parent_aliases": [
          "religiousorgs"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "historicaltours",
        "title": "Historical Tours",
        "parent_aliases": [
          "tours"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hkcafe",
        "title": "Hong Kong Style Cafe",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "HK",
          "CA",
          "US",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hobbyshops",
        "title": "Hobby Shops",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hockeyequipment",
        "title": "Hockey Equipment",
        "parent_aliases": [
          "sportgoods"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hokkien",
        "title": "Hokkien",
        "parent_aliases": [
          "chinese"
        ],
        "country_whitelist": [
          "HK",
          "MY",
          "SG",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "holidaydecorations",
        "title": "Holiday Decorations",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "home_inspectors",
        "title": "Home Inspectors",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "home_organization",
        "title": "Home Organization",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "CA",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "homeandgarden",
        "title": "Home & Garden",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "homeappliancerepair",
        "title": "Appliances & Repair",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "homeautomation",
        "title": "Home Automation",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "homecleaning",
        "title": "Home Cleaning",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "homedecor",
        "title": "Home Decor",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "homedevelopers",
        "title": "Home Developers",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "BR",
          "CL",
          "IT",
          "MX"
        ]
      },
      {
        "alias": "homeenergyauditors",
        "title": "Home Energy Auditors",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "CA",
          "CH",
          "DE",
          "ES",
          "FI",
          "FR",
          "NL",
          "PT",
          "SE",
          "US",
          "DK",
          "NO",
          "SG",
          "MY",
          "NZ",
          "AU",
          "GB",
          "SE",
          "PH",
          "IE",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "homehealthcare",
        "title": "Home Health Care",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "homeinsurance",
        "title": "Home & Rental Insurance",
        "parent_aliases": [
          "insurance"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "homelessshelters",
        "title": "Homeless Shelters",
        "parent_aliases": [
          "nonprofit"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "homemadefood",
        "title": "Homemade Food",
        "parent_aliases": [
          "turkish"
        ],
        "country_whitelist": [
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "homenetworkinstall",
        "title": "Home Network Installation",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "BR",
          "CH",
          "CZ",
          "DE",
          "DK",
          "ES",
          "FI",
          "NL",
          "NO",
          "PT",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "homeopathic",
        "title": "Homeopathic",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "CA",
          "GB",
          "HK",
          "IE",
          "NZ",
          "SG",
          "TR",
          "TW",
          "US"
        ]
      },
      {
        "alias": "homeownerassociation",
        "title": "Homeowner Association",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [
          "CZ",
          "PL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "homeservices",
        "title": "Home Services",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "homestaging",
        "title": "Home Staging",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "CZ",
          "ES",
          "FR",
          "PT"
        ]
      },
      {
        "alias": "hometheatreinstallation",
        "title": "Home Theatre Installation",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "DK"
        ]
      },
      {
        "alias": "homewindowtinting",
        "title": "Home Window Tinting",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "BE",
          "NL",
          "PT",
          "IE",
          "CA",
          "US",
          "NZ",
          "AU",
          "GB",
          "SG"
        ],
        "country_blacklist": []
      },
      {
        "alias": "honduran",
        "title": "Honduran",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "JP",
          "TR"
        ]
      },
      {
        "alias": "honey",
        "title": "Honey",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "DE",
          "FI",
          "FR",
          "IT",
          "PL",
          "SE",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hookah_bars",
        "title": "Hookah Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "SG"
        ]
      },
      {
        "alias": "horse_boarding",
        "title": "Horse Boarding",
        "parent_aliases": [
          "pets"
        ],
        "country_whitelist": [
          "AU",
          "CA",
          "CZ",
          "DE",
          "DK",
          "FR",
          "GB",
          "IE",
          "NO",
          "NZ",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "horsebackriding",
        "title": "Horseback Riding",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "horsequipment",
        "title": "Horse Equipment Shops",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CH",
          "HK",
          "JP",
          "MY",
          "NZ",
          "PH",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "horseracing",
        "title": "Horse Racing",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "CA",
          "FR",
          "GB",
          "IE",
          "IT",
          "MY",
          "NZ",
          "PH",
          "SG"
        ]
      },
      {
        "alias": "horumon",
        "title": "Horumon",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hospice",
        "title": "Hospice",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hospitalists",
        "title": "Hospitalists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE",
          "IT",
          "JP",
          "TR"
        ]
      },
      {
        "alias": "hospitals",
        "title": "Hospitals",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hostels",
        "title": "Hostels",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hot_air_balloons",
        "title": "Hot Air Balloons",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "CA",
          "NZ",
          "SG"
        ]
      },
      {
        "alias": "hotdog",
        "title": "Hot Dogs",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hotdogs",
        "title": "Fast Food",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hotel_bar",
        "title": "Hotel bar",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [
          "BR",
          "DK",
          "FI",
          "NO",
          "PT",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hotels",
        "title": "Hotels",
        "parent_aliases": [
          "eventservices",
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hotelstravel",
        "title": "Hotels & Travel",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hotpot",
        "title": "Hot Pot",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "BR",
          "CA",
          "FR",
          "HK",
          "JP",
          "MY",
          "PH",
          "SE",
          "SG",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hotsprings",
        "title": "Hot Springs",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [
          "AT",
          "AU",
          "BR",
          "CH",
          "CZ",
          "DE",
          "JP",
          "NZ",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hottubandpool",
        "title": "Hot Tub & Pool",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "housesitters",
        "title": "House Sitters",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "AU",
          "IT",
          "US",
          "CA",
          "DE",
          "CH",
          "AT",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "housingcooperatives",
        "title": "Housing Cooperatives",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "IT",
          "MX"
        ]
      },
      {
        "alias": "hunan",
        "title": "Hunan",
        "parent_aliases": [
          "chinese"
        ],
        "country_whitelist": [
          "FR",
          "HK",
          "MY",
          "SG",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hungarian",
        "title": "Hungarian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "huntingfishingsupplies",
        "title": "Hunting & Fishing Supplies",
        "parent_aliases": [
          "sportgoods"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hvac",
        "title": "Heating & Air Conditioning/HVAC",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hybridcarrepair",
        "title": "Hybrid Car Repair",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "AU",
          "CZ",
          "GB",
          "IE",
          "NZ",
          "PL",
          "SE",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hydrojetting",
        "title": "Hydro-jetting",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "CZ",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "hydroponics",
        "title": "Hydroponics",
        "parent_aliases": [
          "gardening"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hydrotherapy",
        "title": "Hydrotherapy",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "hypnosis",
        "title": "Hypnosis/Hypnotherapy",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "HK",
          "NL",
          "TR"
        ]
      },
      {
        "alias": "iberian",
        "title": "Iberian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "CA",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "icecream",
        "title": "Ice Cream & Frozen Yogurt",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "icedelivery",
        "title": "Ice Delivery",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "immigrationlawyers",
        "title": "Immigration Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "immunodermatologists",
        "title": "Immunodermatologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR",
          "JP"
        ]
      },
      {
        "alias": "importedfood",
        "title": "Imported Food",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "indonesian",
        "title": "Indonesian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "ES",
          "MX"
        ]
      },
      {
        "alias": "indoor_playcenter",
        "title": "Indoor Playcentre",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "AT",
          "BR",
          "CH",
          "CL",
          "FI",
          "HK",
          "IE",
          "MX",
          "MY",
          "PH",
          "PL",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "indoorlandscaping",
        "title": "Indoor Landscaping",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "IT"
        ]
      },
      {
        "alias": "indpak",
        "title": "Indian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "infectiousdisease",
        "title": "Infectious Disease Specialists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "installmentloans",
        "title": "Installment Loans",
        "parent_aliases": [
          "financialservices"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "insulationinstallation",
        "title": "Insulation Installation",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "insurance",
        "title": "Insurance",
        "parent_aliases": [
          "financialservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "interiordesign",
        "title": "Interior Design",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "interlocksystems",
        "title": "Interlock Systems",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "internalmed",
        "title": "Internal Medicine",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR"
        ]
      },
      {
        "alias": "international",
        "title": "International",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI",
          "IT",
          "MY",
          "PH",
          "TR",
          "US"
        ]
      },
      {
        "alias": "internetbooth",
        "title": "Internet Booths & Calling Centers",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "AR",
          "BR",
          "CL",
          "ES",
          "IT",
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "internetcafe",
        "title": "Internet Cafes",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "intervaltraininggyms",
        "title": "Interval Training Gyms",
        "parent_aliases": [
          "gyms"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "intlgrocery",
        "title": "International Grocery",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "investing",
        "title": "Investing",
        "parent_aliases": [
          "financialservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "iplaw",
        "title": "IP & Internet Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [
          "CZ",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "irish",
        "title": "Irish",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "irish_pubs",
        "title": "Irish Pub",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "irrigation",
        "title": "Irrigation",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "island_pub",
        "title": "Island Pub",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "isps",
        "title": "Internet Service Providers",
        "parent_aliases": [
          "professional",
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "israeli",
        "title": "Israeli",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "CZ",
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "italian",
        "title": "Italian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "itservices",
        "title": "IT Services & Computer Repair",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "ivhydration",
        "title": "IV Hydration",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "izakaya",
        "title": "Izakaya",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "AU",
          "BR",
          "HK",
          "JP",
          "MX",
          "NZ",
          "SG",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "jailsandprisons",
        "title": "Jails & Prisons",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "jaliscan",
        "title": "Jaliscan",
        "parent_aliases": [
          "mexican"
        ],
        "country_whitelist": [
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "japacurry",
        "title": "Japanese Curry",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "HK",
          "JP",
          "SG",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "japanese",
        "title": "Japanese",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "jazzandblues",
        "title": "Jazz & Blues",
        "parent_aliases": [
          "arts",
          "nightlife"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "jetskis",
        "title": "Jet Skis",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "jewelry",
        "title": "Jewelry",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "jewelryrepair",
        "title": "Jewelry Repair",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE",
          "FI",
          "GB",
          "HK",
          "IE",
          "NZ",
          "SE",
          "SG",
          "TW"
        ]
      },
      {
        "alias": "jewish",
        "title": "Jewish",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "DE",
          "IT",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "jpsweets",
        "title": "Japanese Sweets",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "juicebars",
        "title": "Juice Bars & Smoothies",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "junkremovalandhauling",
        "title": "Junk Removal & Hauling",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "junkyards",
        "title": "Junkyards",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "BE",
          "FR",
          "NL",
          "DK",
          "NO",
          "IE",
          "CA",
          "DE",
          "US",
          "CZ",
          "NZ",
          "AU",
          "AT",
          "BR",
          "SE",
          "SG",
          "PL",
          "GB"
        ],
        "country_blacklist": []
      },
      {
        "alias": "kaiseki",
        "title": "Kaiseki",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "karaoke",
        "title": "Karaoke",
        "parent_aliases": [
          "nightlife"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "karaokerental",
        "title": "Karaoke Rental",
        "parent_aliases": [
          "partyequipmentrentals"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "karate",
        "title": "Karate",
        "parent_aliases": [
          "martialarts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "kebab",
        "title": "Kebab",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "kickboxing",
        "title": "Kickboxing",
        "parent_aliases": [
          "martialarts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "kids_activities",
        "title": "Kids Activities",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "SG"
        ]
      },
      {
        "alias": "kidshairsalons",
        "title": "Kids Hair Salons",
        "parent_aliases": [
          "hair"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "kimonos",
        "title": "Kimonos",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "kiosk",
        "title": "Kiosk",
        "parent_aliases": [
          "food",
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "CA",
          "FR",
          "GB",
          "HK",
          "IE",
          "IT",
          "NZ",
          "SG",
          "US"
        ]
      },
      {
        "alias": "kitchenandbath",
        "title": "Kitchen & Bath",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "kitchenincubators",
        "title": "Kitchen Incubators",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [
          "GB",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "kitchensupplies",
        "title": "Kitchen Supplies",
        "parent_aliases": [
          "kitchenandbath"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "kiteboarding",
        "title": "Kiteboarding",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "HK",
          "IT"
        ]
      },
      {
        "alias": "knifesharpening",
        "title": "Knife Sharpening",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "knittingsupplies",
        "title": "Knitting Supplies",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "kombucha",
        "title": "Kombucha",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "kopitiam",
        "title": "Kopitiam",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "MY",
          "SG"
        ],
        "country_blacklist": []
      },
      {
        "alias": "korean",
        "title": "Korean",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "kosher",
        "title": "Kosher",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "PT",
          "TR"
        ]
      },
      {
        "alias": "kurdish",
        "title": "Kurdish",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "NO",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "kushikatsu",
        "title": "Kushikatsu",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "laboratorytesting",
        "title": "Laboratory Testing",
        "parent_aliases": [
          "diagnosticservices"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "BE",
          "BR",
          "CL",
          "CZ",
          "ES",
          "FR",
          "IT",
          "MX",
          "PL",
          "PT",
          "US",
          "CA"
        ],
        "country_blacklist": []
      },
      {
        "alias": "lactationservices",
        "title": "Lactation Services",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "BE",
          "BR",
          "FR",
          "IT",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "lahmacun",
        "title": "Lahmacun",
        "parent_aliases": [
          "turkish"
        ],
        "country_whitelist": [
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "lakes",
        "title": "Lakes",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "lancenters",
        "title": "LAN Centers",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "IT",
          "MY",
          "PH"
        ]
      },
      {
        "alias": "landmarks",
        "title": "Landmarks & Historical Buildings",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "landscapearchitects",
        "title": "Landscape Architects or Designers",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "landscaping",
        "title": "Landscaping",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "landsurveying",
        "title": "Land Surveying",
        "parent_aliases": [
          "realestatesvcs"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "JP"
        ]
      },
      {
        "alias": "language_schools",
        "title": "Language Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "laos",
        "title": "Laos",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AU"
        ],
        "country_blacklist": []
      },
      {
        "alias": "laotian",
        "title": "Laotian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "laser_hair_removal",
        "title": "Laser Hair Removal",
        "parent_aliases": [
          "hairremoval"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "laserlasikeyes",
        "title": "Laser Eye Surgery/Lasik",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "lasertag",
        "title": "Laser Tag",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "IE"
        ]
      },
      {
        "alias": "latin",
        "title": "Latin American",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "laundromat",
        "title": "Laundromat",
        "parent_aliases": [
          "laundryservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "laundryservices",
        "title": "Laundry Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "lawn_bowling",
        "title": "Lawn Bowling",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "AU",
          "FI",
          "NO",
          "NZ",
          "PT",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "lawnservices",
        "title": "Lawn Services",
        "parent_aliases": [
          "landscaping"
        ],
        "country_whitelist": [
          "BE",
          "BR",
          "NL",
          "US",
          "CA"
        ],
        "country_blacklist": []
      },
      {
        "alias": "lawyers",
        "title": "Lawyers",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "leather",
        "title": "Leather Goods",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "lebanese",
        "title": "Lebanese",
        "parent_aliases": [
          "mideastern"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "HK",
          "JP"
        ]
      },
      {
        "alias": "legalservices",
        "title": "Legal Services",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "AT",
          "CH",
          "CL",
          "DE",
          "ES",
          "FI",
          "GB",
          "HK",
          "IE",
          "MX",
          "MY",
          "PH",
          "SE",
          "TW"
        ]
      },
      {
        "alias": "leisure_centers",
        "title": "Leisure Centers",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "libraries",
        "title": "Libraries",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "liceservices",
        "title": "Lice Services",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "CZ",
          "DE",
          "FI",
          "HK",
          "JP",
          "MX"
        ]
      },
      {
        "alias": "lifecoach",
        "title": "Life Coach",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "lifeinsurance",
        "title": "Life Insurance",
        "parent_aliases": [
          "insurance"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CA",
          "CH",
          "DE",
          "FI",
          "FR",
          "HK",
          "MY",
          "PH",
          "PT",
          "TW"
        ]
      },
      {
        "alias": "lighting",
        "title": "Lighting Fixtures & Equipment",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "lightingstores",
        "title": "Lighting Stores",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "ligurian",
        "title": "Ligurian",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "FR",
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "limos",
        "title": "Limos",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "linens",
        "title": "Linens",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "CH",
          "CZ",
          "DE",
          "DK",
          "FR",
          "IT",
          "NO",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "lingerie",
        "title": "Lingerie",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "livestocksupply",
        "title": "Livestock Feed & Supply",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "localfishstores",
        "title": "Local Fish Stores",
        "parent_aliases": [
          "petstore"
        ],
        "country_whitelist": [
          "BE",
          "CZ",
          "DE",
          "DK",
          "ES",
          "FR",
          "IT",
          "JP",
          "NL",
          "NO",
          "SE",
          "SG",
          "US",
          "CH",
          "MY",
          "CA",
          "NZ",
          "AU",
          "GB",
          "PH",
          "IE",
          "PL",
          "AT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "localflavor",
        "title": "Local Flavor",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "localservices",
        "title": "Local Services",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "locksmiths",
        "title": "Keys & Locksmiths",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "lounges",
        "title": "Lounges",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "luggage",
        "title": "Luggage",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "luggagestorage",
        "title": "Luggage Storage",
        "parent_aliases": [
          "travelservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "lumbard",
        "title": "Lumbard",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "lyonnais",
        "title": "Lyonnais",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "BE",
          "FR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "macarons",
        "title": "Macarons",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "IT",
          "MY",
          "PH"
        ]
      },
      {
        "alias": "machinerental",
        "title": "Machine & Tool Rental",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "machineshops",
        "title": "Machine Shops",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "madeira",
        "title": "Madeira",
        "parent_aliases": [
          "portuguese"
        ],
        "country_whitelist": [
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "magicians",
        "title": "Magicians",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI",
          "SE",
          "SG",
          "TR"
        ]
      },
      {
        "alias": "mags",
        "title": "Newspapers & Magazines",
        "parent_aliases": [
          "media"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "mahjong",
        "title": "Mah Jong Halls",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [
          "HK",
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "mailboxcenters",
        "title": "Mailbox Centers",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "makerspaces",
        "title": "Makerspaces",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "IT"
        ]
      },
      {
        "alias": "makeupartists",
        "title": "Makeup Artists",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "malaysian",
        "title": "Malaysian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "ES",
          "PT",
          "TR"
        ]
      },
      {
        "alias": "mamak",
        "title": "Mamak",
        "parent_aliases": [
          "malaysian"
        ],
        "country_whitelist": [
          "AU",
          "MY"
        ],
        "country_blacklist": []
      },
      {
        "alias": "marchingbands",
        "title": "Marching Bands",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE",
          "GB",
          "NO",
          "PT",
          "SE",
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "marinas",
        "title": "Marinas",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "BE",
          "FR",
          "DK",
          "DE",
          "BR",
          "NL",
          "NO",
          "TR",
          "NZ",
          "CH",
          "CL",
          "CA",
          "IT",
          "AR",
          "AU",
          "GB",
          "IE",
          "ES",
          "US",
          "SG",
          "MX",
          "SE",
          "AT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "marketing",
        "title": "Marketing",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "markets",
        "title": "Fruits & Veggies",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "marketstalls",
        "title": "Market Stalls",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "CZ",
          "DE",
          "DK",
          "GB",
          "IE",
          "IT",
          "NO",
          "PT",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "martialarts",
        "title": "Martial Arts",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "masonry_concrete",
        "title": "Masonry/Concrete",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "BR",
          "GB",
          "IE",
          "NL",
          "NZ",
          "SG"
        ]
      },
      {
        "alias": "massage",
        "title": "Massage",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "massage_schools",
        "title": "Massage Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "massage_therapy",
        "title": "Massage Therapy",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "CZ",
          "DE",
          "FI",
          "FR",
          "HK",
          "IE",
          "MY",
          "NZ",
          "PH",
          "PL",
          "SE",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "massmedia",
        "title": "Mass Media",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "matchmakers",
        "title": "Matchmakers",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "CA",
          "CH",
          "CL",
          "DE",
          "DK",
          "ES",
          "FR",
          "JP",
          "MX",
          "NO",
          "PL",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "materialeelettrico",
        "title": "Materiale elettrico",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [
          "AR",
          "CL",
          "ES",
          "IT",
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "maternity",
        "title": "Maternity Wear",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "mattresses",
        "title": "Mattresses",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "mauritius",
        "title": "Mauritius",
        "parent_aliases": [
          "french"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "AT",
          "AU",
          "BR",
          "CH",
          "CL",
          "DE",
          "DK",
          "JP",
          "MX",
          "NO",
          "NZ",
          "PL",
          "TR"
        ]
      },
      {
        "alias": "meaderies",
        "title": "Meaderies",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "AR",
          "AT",
          "CH",
          "CL",
          "DE",
          "ES",
          "MX",
          "PL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "meatballs",
        "title": "Meatballs",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "BE",
          "FR",
          "NL",
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "meats",
        "title": "Meat Shops",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "medcenters",
        "title": "Medical Centers",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "media",
        "title": "Books, Mags, Music & Video",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "mediators",
        "title": "Mediators",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [
          "BE",
          "CH",
          "NL",
          "IE",
          "CA",
          "DE",
          "IT",
          "US",
          "NZ",
          "AU",
          "AT",
          "SG",
          "GB"
        ],
        "country_blacklist": []
      },
      {
        "alias": "medicalfoot",
        "title": "Medical Foot Care",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "BR",
          "CL",
          "CZ",
          "ES",
          "FI",
          "IT",
          "JP",
          "MX",
          "MY",
          "PH",
          "PL",
          "PT",
          "TR",
          "US",
          "AT"
        ]
      },
      {
        "alias": "medicallaw",
        "title": "Medical Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "medicalspa",
        "title": "Medical Spas",
        "parent_aliases": [
          "health",
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "medicalsupplies",
        "title": "Medical Supplies",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "medicaltransportation",
        "title": "Medical Transportation",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "AT",
          "AU",
          "BE",
          "BR",
          "CH",
          "DE",
          "DK",
          "FR",
          "IT",
          "NL",
          "NO",
          "PT",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "meditationcenters",
        "title": "Meditation Centers",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "mediterranean",
        "title": "Mediterranean",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "memorycare",
        "title": "Memory Care",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "menscloth",
        "title": "Men's Clothing",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "menshair",
        "title": "Men's Hair Salons",
        "parent_aliases": [
          "hair"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "BE",
          "CL",
          "CZ",
          "DK",
          "ES",
          "MX",
          "NL",
          "NO",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "metaldetectorservices",
        "title": "Metal Detector Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "metalfabricators",
        "title": "Metal Fabricators",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "MX",
          "SE"
        ]
      },
      {
        "alias": "metrostations",
        "title": "Metro Stations",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "mexican",
        "title": "Mexican",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "mideastern",
        "title": "Middle Eastern",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR"
        ]
      },
      {
        "alias": "midwives",
        "title": "Midwives",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "militarysurplus",
        "title": "Military Surplus",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "milkbars",
        "title": "Milk Bars",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AU",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "milkshakebars",
        "title": "Milkshake Bars",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "GB"
        ],
        "country_blacklist": []
      },
      {
        "alias": "minho",
        "title": "Minho",
        "parent_aliases": [
          "portuguese"
        ],
        "country_whitelist": [
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "mini_golf",
        "title": "Mini Golf",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "IT"
        ]
      },
      {
        "alias": "mistingsystemservices",
        "title": "Misting System Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "mobile_home_repair",
        "title": "Mobile Home Repair",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "BE",
          "CA",
          "NL",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "mobiledentrepair",
        "title": "Mobile Dent Repair",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "CA",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "mobilehomes",
        "title": "Mobile Home Dealers",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "mobileparks",
        "title": "Mobile Home Parks",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "mobilephonerepair",
        "title": "Mobile Phone Repair",
        "parent_aliases": [
          "itservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "mobilephones",
        "title": "Mobile Phones",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "mobilityequipment",
        "title": "Mobility Equipment Sales & Services",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "US",
          "CA"
        ],
        "country_blacklist": []
      },
      {
        "alias": "modern_australian",
        "title": "Modern Australian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AU"
        ],
        "country_blacklist": []
      },
      {
        "alias": "modern_european",
        "title": "Modern European",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "mohels",
        "title": "Mohels",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "mongolian",
        "title": "Mongolian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "ES",
          "FI",
          "PT",
          "TR"
        ]
      },
      {
        "alias": "montessori",
        "title": "Montessori Schools",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "moroccan",
        "title": "Moroccan",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "TR"
        ]
      },
      {
        "alias": "mortgagebrokers",
        "title": "Mortgage Brokers",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "DK",
          "ES"
        ]
      },
      {
        "alias": "mortgagelenders",
        "title": "Mortgage Lenders",
        "parent_aliases": [
          "financialservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE",
          "FR",
          "TR"
        ]
      },
      {
        "alias": "mortuaryservices",
        "title": "Mortuary Services",
        "parent_aliases": [
          "funeralservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "IT"
        ]
      },
      {
        "alias": "mosques",
        "title": "Mosques",
        "parent_aliases": [
          "religiousorgs"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "motodealers",
        "title": "Motorsport Vehicle Dealers",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "ES",
          "IT",
          "SE",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "motorcycle_rental",
        "title": "Motorcycle Rental",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [
          "AU",
          "BR",
          "CZ",
          "DE",
          "ES",
          "FI",
          "FR",
          "IT",
          "MX",
          "NO",
          "NZ",
          "PT",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "motorcycledealers",
        "title": "Motorcycle Dealers",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "motorcyclepartsandsupplies",
        "title": "Motorcycle Parts & Supplies",
        "parent_aliases": [
          "autopartssupplies"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "motorcyclerepair",
        "title": "Motorcycle Repair",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "motorcyclinggear",
        "title": "Motorcycle Gear",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CA",
          "GB",
          "IE",
          "NZ"
        ]
      },
      {
        "alias": "motorepairs",
        "title": "Motorsport Vehicle Repairs",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "ES",
          "IT",
          "SE",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "mountainbiking",
        "title": "Mountain Biking",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "mountainhuts",
        "title": "Mountain Huts",
        "parent_aliases": [
          "hotels"
        ],
        "country_whitelist": [
          "AR",
          "AT",
          "CH",
          "CL",
          "CZ",
          "DE",
          "ES",
          "FR",
          "IT",
          "NO",
          "NZ",
          "PL",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "movers",
        "title": "Movers",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "movietheaters",
        "title": "Cinema",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "muaythai",
        "title": "Muay Thai",
        "parent_aliases": [
          "martialarts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "municipality",
        "title": "Municipality",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "museums",
        "title": "Museums",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "musicalinstrumentsandteachers",
        "title": "Musical Instruments & Teachers",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "musicians",
        "title": "Musicians",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "TR"
        ]
      },
      {
        "alias": "musicinstrumentservices",
        "title": "Musical Instrument Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "musicproduction",
        "title": "Music Production Services",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "musicvenues",
        "title": "Music Venues",
        "parent_aliases": [
          "arts",
          "nightlife"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "musicvideo",
        "title": "Music & DVDs",
        "parent_aliases": [
          "media"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "mystics",
        "title": "Mystics",
        "parent_aliases": [
          "psychic_astrology"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "nailtechnicians",
        "title": "Nail Technicians",
        "parent_aliases": [
          "othersalons"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "BR",
          "CH",
          "DE",
          "FR",
          "JP",
          "TR"
        ]
      },
      {
        "alias": "nannys",
        "title": "Nanny Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI",
          "SE"
        ]
      },
      {
        "alias": "napoletana",
        "title": "Napoletana",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "CZ",
          "FR",
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "nasilemak",
        "title": "Nasi Lemak",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "MY",
          "SG"
        ],
        "country_blacklist": []
      },
      {
        "alias": "naturalgassuppliers",
        "title": "Natural Gas Suppliers",
        "parent_aliases": [
          "utilities"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "naturopathic",
        "title": "Naturopathic/Holistic",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "nephrologists",
        "title": "Nephrologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE"
        ]
      },
      {
        "alias": "neurologist",
        "title": "Neurologist",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "neuropathologists",
        "title": "Neuropathologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "neurotologists",
        "title": "Neurotologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "JP"
        ]
      },
      {
        "alias": "newamerican",
        "title": "New American",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "DK",
          "GB",
          "IE",
          "NO",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "newcanadian",
        "title": "Canadian (New)",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "CA"
        ],
        "country_blacklist": []
      },
      {
        "alias": "newmexican",
        "title": "New Mexican Cuisine",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "newzealand",
        "title": "New Zealand",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "NZ"
        ],
        "country_blacklist": []
      },
      {
        "alias": "nicaraguan",
        "title": "Nicaraguan",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL"
        ]
      },
      {
        "alias": "nicois",
        "title": "Nicoise",
        "parent_aliases": [
          "french"
        ],
        "country_whitelist": [
          "FR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "nightfood",
        "title": "Night Food",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "DK",
          "NO",
          "PL",
          "SE",
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "nightlife",
        "title": "Nightlife",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "nikkei",
        "title": "Nikkei",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AR",
          "BR",
          "CL",
          "ES",
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "nonprofit",
        "title": "Community Service/Non-Profit",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "noodles",
        "title": "Noodles",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE",
          "FR"
        ]
      },
      {
        "alias": "norcinerie",
        "title": "Norcinerie",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "northeasternbrazilian",
        "title": "Northeastern Brazilian",
        "parent_aliases": [
          "brazilian"
        ],
        "country_whitelist": [
          "BR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "northernbrazilian",
        "title": "Northern Brazilian",
        "parent_aliases": [
          "brazilian"
        ],
        "country_whitelist": [
          "BR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "northerngerman",
        "title": "Northern German",
        "parent_aliases": [
          "german"
        ],
        "country_whitelist": [
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "northernmexican",
        "title": "Northern Mexican",
        "parent_aliases": [
          "mexican"
        ],
        "country_whitelist": [
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "norwegian",
        "title": "Traditional Norwegian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "FR",
          "NO"
        ],
        "country_blacklist": []
      },
      {
        "alias": "notaries",
        "title": "Notaries",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "NO"
        ]
      },
      {
        "alias": "nudist",
        "title": "Nudist",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "BE",
          "FR",
          "CH",
          "NL",
          "DK",
          "PT",
          "NO",
          "CA",
          "DE",
          "US",
          "CZ",
          "NZ",
          "AU",
          "GB",
          "BR",
          "FI",
          "SE",
          "IE",
          "PL",
          "AT",
          "ES"
        ],
        "country_blacklist": []
      },
      {
        "alias": "nursepractitioner",
        "title": "Nurse Practitioner",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "nursingschools",
        "title": "Nursing Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "nutritionists",
        "title": "Nutritionists",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "nyonya",
        "title": "Nyonya",
        "parent_aliases": [
          "malaysian"
        ],
        "country_whitelist": [
          "AU",
          "MY"
        ],
        "country_blacklist": []
      },
      {
        "alias": "oaxacan",
        "title": "Oaxacan",
        "parent_aliases": [
          "mexican"
        ],
        "country_whitelist": [
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "obgyn",
        "title": "Obstetricians & Gynecologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "observatories",
        "title": "Observatories",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "occupationaltherapy",
        "title": "Occupational Therapy",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "CZ",
          "FI",
          "FR",
          "HK",
          "IT",
          "JP",
          "MY",
          "NZ",
          "PH",
          "PL",
          "SE",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "oden",
        "title": "Oden",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "officecleaning",
        "title": "Office Cleaning",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "officeequipment",
        "title": "Office Equipment",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "officiants",
        "title": "Officiants",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "oilchange",
        "title": "Oil Change Stations",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE",
          "SE"
        ]
      },
      {
        "alias": "okinawan",
        "title": "Okinawan",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "okonomiyaki",
        "title": "Okonomiyaki",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "oliveoil",
        "title": "Olive Oil",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "DE",
          "ES",
          "FR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "oncologist",
        "title": "Oncologist",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "onigiri",
        "title": "Onigiri",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "opensandwiches",
        "title": "Open Sandwiches",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "DK",
          "NO",
          "SE",
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "opera",
        "title": "Opera & Ballet",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "opthamalogists",
        "title": "Ophthalmologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "opticians",
        "title": "Eyewear & Opticians",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "optometrists",
        "title": "Optometrists",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE"
        ]
      },
      {
        "alias": "oralsurgeons",
        "title": "Oral Surgeons",
        "parent_aliases": [
          "dentists"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "organdonorservices",
        "title": "Organ & Tissue Donor Services",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "organic_stores",
        "title": "Organic Stores",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "oriental",
        "title": "Oriental",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE",
          "FR",
          "PT",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "orthodontists",
        "title": "Orthodontists",
        "parent_aliases": [
          "dentists"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "orthopedists",
        "title": "Orthopedists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "orthotics",
        "title": "Orthotics",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "AU",
          "BR",
          "CZ",
          "DK",
          "ES",
          "FI",
          "FR",
          "GB",
          "IE",
          "IT",
          "NO",
          "NZ",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "osteopathicphysicians",
        "title": "Osteopathic Physicians",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "osteopaths",
        "title": "Osteopaths",
        "parent_aliases": [
          "medcenters"
        ],
        "country_whitelist": [
          "AU"
        ],
        "country_blacklist": []
      },
      {
        "alias": "othersalons",
        "title": "Nail Salons",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "otologists",
        "title": "Otologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE",
          "FR"
        ]
      },
      {
        "alias": "ottomancuisine",
        "title": "Ottoman Cuisine",
        "parent_aliases": [
          "turkish"
        ],
        "country_whitelist": [
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "outdoorfurniture",
        "title": "Outdoor Furniture Stores",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "outdoorgear",
        "title": "Outdoor Gear",
        "parent_aliases": [
          "sportgoods"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "outdoormovies",
        "title": "Outdoor Movies",
        "parent_aliases": [
          "movietheaters"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "PL"
        ]
      },
      {
        "alias": "outdoorpowerequipmentservices",
        "title": "Outdoor Power Equipment Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "AT",
          "BR",
          "CA",
          "CH",
          "DE",
          "DK",
          "MY",
          "NO",
          "PH",
          "PL",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "outlet_stores",
        "title": "Outlet Stores",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "oxygenbars",
        "title": "Oxygen Bars",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "oyakodon",
        "title": "Oyakodon",
        "parent_aliases": [
          "donburi"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pachinko",
        "title": "Pachinko",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "packingservices",
        "title": "Packing Services",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "BE",
          "CA",
          "CZ",
          "FR",
          "HK",
          "MY",
          "PH",
          "PL",
          "SG",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "packingsupplies",
        "title": "Packing Supplies",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [
          "BE",
          "FR",
          "CH",
          "NL",
          "DK",
          "PT",
          "NO",
          "IE",
          "CA",
          "DE",
          "JP",
          "US",
          "CZ",
          "NZ",
          "AU",
          "AT",
          "BR",
          "SG",
          "GB"
        ],
        "country_blacklist": []
      },
      {
        "alias": "paddleboarding",
        "title": "Paddleboarding",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "HK",
          "IT",
          "JP",
          "MY",
          "PH",
          "SE",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "painmanagement",
        "title": "Pain Management",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "paintandsip",
        "title": "Paint & Sip",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [
          "HK",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "paintball",
        "title": "Paintball",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "SG"
        ]
      },
      {
        "alias": "painters",
        "title": "Painters",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "paintstores",
        "title": "Paint Stores",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI",
          "HK",
          "MY",
          "PH",
          "PT",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "paintyourownpottery",
        "title": "Paint-Your-Own Pottery",
        "parent_aliases": [
          "artsandcrafts"
        ],
        "country_whitelist": [
          "CA",
          "DE",
          "HK",
          "MY",
          "PH",
          "SG",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pakistani",
        "title": "Pakistani",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "palatine",
        "title": "Palatine",
        "parent_aliases": [
          "german"
        ],
        "country_whitelist": [
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "panasian",
        "title": "Pan Asian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "IT"
        ]
      },
      {
        "alias": "pancakes",
        "title": "Pancakes",
        "parent_aliases": [
          "breakfast_brunch"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "panzerotti",
        "title": "Panzerotti",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "paragliding",
        "title": "Paragliding",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "parasailing",
        "title": "Parasailing",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "parentingclasses",
        "title": "Parenting Classes",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "parking",
        "title": "Parking",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "parklets",
        "title": "Parklets",
        "parent_aliases": [
          "localflavor"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "parks",
        "title": "Parks",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "parma",
        "title": "Parma",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AU"
        ],
        "country_blacklist": []
      },
      {
        "alias": "partybikerentals",
        "title": "Party Bike Rentals",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [
          "BE",
          "DE",
          "ES",
          "IE",
          "NL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "partybusrentals",
        "title": "Party Bus Rentals",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CA",
          "CZ",
          "ES",
          "FR",
          "HK",
          "IE",
          "IT",
          "JP",
          "MX",
          "MY",
          "PH",
          "PL",
          "PT",
          "TW"
        ]
      },
      {
        "alias": "partycharacters",
        "title": "Party Characters",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "partyequipmentrentals",
        "title": "Party Equipment Rentals",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI",
          "HK",
          "TW"
        ]
      },
      {
        "alias": "partysupplies",
        "title": "Party Supplies",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "passportvisaservices",
        "title": "Passport & Visa Services",
        "parent_aliases": [
          "travelservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pastashops",
        "title": "Pasta Shops",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "BE",
          "CL",
          "CZ",
          "DK",
          "GB",
          "IE",
          "IT",
          "JP",
          "NL",
          "NO",
          "NZ",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "patentlaw",
        "title": "Patent Law",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pathologists",
        "title": "Pathologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "patiocoverings",
        "title": "Patio Coverings",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "BE",
          "BR",
          "CA",
          "IT",
          "NL",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pawn",
        "title": "Pawn Shops",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "TR"
        ]
      },
      {
        "alias": "paydayloans",
        "title": "Check Cashing/Pay-day Loans",
        "parent_aliases": [
          "financialservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "CZ",
          "DE",
          "DK",
          "ES",
          "IT",
          "NZ"
        ]
      },
      {
        "alias": "payroll",
        "title": "Payroll Services",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "CA",
          "CZ",
          "GB",
          "IE",
          "NL",
          "NZ",
          "SG",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pediatric_dentists",
        "title": "Pediatric Dentists",
        "parent_aliases": [
          "dentists"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pediatricians",
        "title": "Pediatricians",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pedicabs",
        "title": "Pedicabs",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE",
          "DK",
          "MY",
          "NO",
          "PH",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pekinese",
        "title": "Pekinese",
        "parent_aliases": [
          "chinese"
        ],
        "country_whitelist": [
          "FR",
          "HK",
          "IT",
          "JP",
          "MY",
          "SG",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pensions",
        "title": "Pensions",
        "parent_aliases": [
          "hotels"
        ],
        "country_whitelist": [
          "AT",
          "BR",
          "CZ",
          "DE",
          "DK",
          "ES",
          "JP",
          "NO",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "perfume",
        "title": "Perfume",
        "parent_aliases": [
          "shopping",
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CA",
          "FI",
          "PL",
          "SG",
          "TR"
        ]
      },
      {
        "alias": "periodontists",
        "title": "Periodontists",
        "parent_aliases": [
          "dentists"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "permanentmakeup",
        "title": "Permanent Makeup",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI",
          "NZ",
          "SG"
        ]
      },
      {
        "alias": "persian",
        "title": "Persian/Iranian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "personal_injury",
        "title": "Personal Injury Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "personal_shopping",
        "title": "Personal Shopping",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "BR",
          "CL",
          "CZ",
          "ES",
          "MX"
        ]
      },
      {
        "alias": "personalassistants",
        "title": "Personal Assistants",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [
          "CZ",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "personalcare",
        "title": "Personal Care Services",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "BR",
          "CZ",
          "DK",
          "FI",
          "FR",
          "NL",
          "NO",
          "PL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "personalchefs",
        "title": "Personal Chefs",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "peruvian",
        "title": "Peruvian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "PT",
          "SG",
          "TR"
        ]
      },
      {
        "alias": "pest_control",
        "title": "Pest Control",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pet_sitting",
        "title": "Pet Sitting",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pet_training",
        "title": "Pet Training",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "petadoption",
        "title": "Pet Adoption",
        "parent_aliases": [
          "pets"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "HK",
          "JP",
          "MX"
        ]
      },
      {
        "alias": "petboarding",
        "title": "Pet Boarding",
        "parent_aliases": [
          "pet_sitting"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "petbreeders",
        "title": "Pet Breeders",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "BR",
          "CL",
          "FI",
          "HK",
          "IE",
          "MX",
          "MY",
          "NZ",
          "PH",
          "PT",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "petcremation",
        "title": "Pet Cremation Services",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pethospice",
        "title": "Pet Hospice",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "petinsurance",
        "title": "Pet Insurance",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "petphotography",
        "title": "Pet Photography",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pets",
        "title": "Pets",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "petservices",
        "title": "Pet Services",
        "parent_aliases": [
          "pets"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "petstore",
        "title": "Pet Stores",
        "parent_aliases": [
          "pets"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pettingzoos",
        "title": "Petting Zoos",
        "parent_aliases": [
          "zoos"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "CH",
          "DE",
          "DK",
          "ES",
          "GB",
          "IT",
          "NL",
          "NO",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pettransport",
        "title": "Pet Transportation",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "petwasteremoval",
        "title": "Pet Waste Removal",
        "parent_aliases": [
          "petservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pfcomercial",
        "title": "PF/Comercial",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "BR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pharmacy",
        "title": "Pharmacy",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI"
        ]
      },
      {
        "alias": "phlebologists",
        "title": "Phlebologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "photoboothrentals",
        "title": "Photo Booth Rentals",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI",
          "HK",
          "JP"
        ]
      },
      {
        "alias": "photoclasses",
        "title": "Photography Classes",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "photographers",
        "title": "Photographers",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "photographystores",
        "title": "Photography Stores & Services",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "physicaltherapy",
        "title": "Physical Therapy",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "physicians",
        "title": "Doctors",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "piadina",
        "title": "Piadina",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "IT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pianobars",
        "title": "Piano Bars",
        "parent_aliases": [
          "nightlife"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "AU",
          "BR",
          "CH",
          "ES",
          "FI",
          "IE",
          "NZ",
          "PL",
          "SG"
        ]
      },
      {
        "alias": "pianoservices",
        "title": "Piano Services",
        "parent_aliases": [
          "musicinstrumentservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pianostores",
        "title": "Piano Stores",
        "parent_aliases": [
          "musicinstrumentservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pickleball",
        "title": "Pickleball",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE",
          "PL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pickyourown",
        "title": "Pick Your Own Farms",
        "parent_aliases": [
          "farms"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "CZ",
          "DE",
          "DK",
          "FR",
          "JP",
          "NO",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "piemonte",
        "title": "Piemonte",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "FR",
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "piercing",
        "title": "Piercing",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pierogis",
        "title": "Pierogis",
        "parent_aliases": [
          "polish"
        ],
        "country_whitelist": [
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pilates",
        "title": "Pilates",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pita",
        "title": "Pita",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pizza",
        "title": "Pizza",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "placentaencapsulation",
        "title": "Placenta Encapsulations",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "CZ",
          "DE",
          "FR",
          "PL",
          "TR"
        ]
      },
      {
        "alias": "planetarium",
        "title": "Planetarium",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "plasticsurgeons",
        "title": "Plastic Surgeons",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "ES",
          "MX"
        ]
      },
      {
        "alias": "playgrounds",
        "title": "Playgrounds",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "playsets",
        "title": "Playsets",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "plumbing",
        "title": "Plumbing",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "plus_size_fashion",
        "title": "Plus Size Fashion",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CA",
          "CL",
          "GB",
          "HK",
          "IE",
          "JP",
          "MX",
          "PL",
          "SG",
          "TR"
        ]
      },
      {
        "alias": "podiatrists",
        "title": "Podiatrists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "poke",
        "title": "Poke",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "AT",
          "AU",
          "BE",
          "BR",
          "CA",
          "CH",
          "DE",
          "DK",
          "GB",
          "FR",
          "IE",
          "MY",
          "NL",
          "NO",
          "NZ",
          "PH",
          "PL",
          "PT",
          "SE",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "poledancingclasses",
        "title": "Pole Dancing Classes",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "AT",
          "BE",
          "CA",
          "CH",
          "CL",
          "ES",
          "GB",
          "IE",
          "MX",
          "PL",
          "PT",
          "TR"
        ]
      },
      {
        "alias": "policedepartments",
        "title": "Police Departments",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "polish",
        "title": "Polish",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI",
          "SG"
        ]
      },
      {
        "alias": "polynesian",
        "title": "Polynesian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "poolbilliards",
        "title": "Pool & Billiards",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "AT",
          "CH",
          "CL",
          "CZ",
          "DE",
          "ES",
          "FI",
          "MX",
          "NO",
          "PL",
          "SE"
        ]
      },
      {
        "alias": "poolcleaners",
        "title": "Pool Cleaners",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "DK",
          "NO"
        ]
      },
      {
        "alias": "poolhalls",
        "title": "Pool Halls",
        "parent_aliases": [
          "nightlife"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "poolservice",
        "title": "Pool & Hot Tub Service",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "popcorn",
        "title": "Popcorn Shops",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [
          "GB",
          "JP",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "popuprestaurants",
        "title": "Pop-Up Restaurants",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "BE",
          "FR",
          "NL",
          "DK",
          "NO",
          "MY",
          "CA",
          "DE",
          "US",
          "HK",
          "NZ",
          "AU",
          "GB",
          "TW",
          "SG",
          "PH",
          "IE",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "popupshops",
        "title": "Pop-up Shops",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "PT"
        ]
      },
      {
        "alias": "portabletoiletservices",
        "title": "Portable Toilet Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "CZ",
          "FI",
          "FR",
          "HK",
          "JP",
          "MX",
          "MY",
          "PH",
          "TW"
        ]
      },
      {
        "alias": "portuguese",
        "title": "Portuguese",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI"
        ]
      },
      {
        "alias": "postoffices",
        "title": "Post Offices",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "postpartumcare",
        "title": "Postpartum Care",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "HK",
          "JP",
          "MY",
          "PL",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "potatoes",
        "title": "Potatoes",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "AU",
          "CH",
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "poutineries",
        "title": "Poutineries",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "CA",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "powdercoating",
        "title": "Powder Coating",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "prenatal",
        "title": "Prenatal/Perinatal Care",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CA",
          "CH",
          "DE",
          "GB",
          "HK",
          "IE",
          "JP",
          "MY",
          "PH",
          "PL",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "preschools",
        "title": "Preschools",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "DK"
        ]
      },
      {
        "alias": "pressurewashers",
        "title": "Pressure Washers",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "HK",
          "JP",
          "MX"
        ]
      },
      {
        "alias": "pretzels",
        "title": "Pretzels",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "CH",
          "DE",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "preventivemedicine",
        "title": "Preventive Medicine",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "printmedia",
        "title": "Print Media",
        "parent_aliases": [
          "massmedia"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "privateinvestigation",
        "title": "Private Investigation",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "privatejetcharter",
        "title": "Private Jet Charter",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "privateschools",
        "title": "Private Schools",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "BR",
          "CL",
          "CZ",
          "DK",
          "ES",
          "MX",
          "NO",
          "NZ",
          "PT",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "privatetutors",
        "title": "Private Tutors",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "processservers",
        "title": "Process Servers",
        "parent_aliases": [
          "legalservices"
        ],
        "country_whitelist": [
          "US",
          "BE",
          "FR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "proctologist",
        "title": "Proctologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "productdesign",
        "title": "Product Design",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [
          "BE",
          "FR",
          "NL",
          "DK",
          "NO",
          "IE",
          "CA",
          "US",
          "AU",
          "GB",
          "PH",
          "SG"
        ],
        "country_blacklist": []
      },
      {
        "alias": "professional",
        "title": "Professional Services",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "propane",
        "title": "Propane",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CZ",
          "MX",
          "NZ"
        ]
      },
      {
        "alias": "propertymgmt",
        "title": "Property Management",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "props",
        "title": "Props",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [
          "BE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "prosthetics",
        "title": "Prosthetics",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "AU",
          "ES",
          "IT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "prosthodontists",
        "title": "Prosthodontists",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "ES",
          "IT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "provencal",
        "title": "Provencal",
        "parent_aliases": [
          "french"
        ],
        "country_whitelist": [
          "FR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "psychiatrists",
        "title": "Psychiatrists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "psychic_astrology",
        "title": "Supernatural Readings",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "psychicmediums",
        "title": "Psychic Mediums",
        "parent_aliases": [
          "psychic_astrology"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "PL"
        ]
      },
      {
        "alias": "psychics",
        "title": "Psychics",
        "parent_aliases": [
          "psychic_astrology"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "psychoanalysts",
        "title": "Psychoanalysts",
        "parent_aliases": [
          "c_and_mh"
        ],
        "country_whitelist": [
          "AR",
          "BE",
          "BR",
          "CZ",
          "ES",
          "FR",
          "MX",
          "NL",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "psychologists",
        "title": "Psychologists",
        "parent_aliases": [
          "c_and_mh"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "GB",
          "HK",
          "IE",
          "JP",
          "PL",
          "SG"
        ]
      },
      {
        "alias": "psychotechnicaltests",
        "title": "Psychotechnical Tests",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "BR",
          "ES"
        ],
        "country_blacklist": []
      },
      {
        "alias": "psychotherapists",
        "title": "Psychotherapists",
        "parent_aliases": [
          "c_and_mh"
        ],
        "country_whitelist": [
          "AT",
          "BR",
          "CH",
          "CZ",
          "DE",
          "DK",
          "FI",
          "FR",
          "NO",
          "SG"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pubfood",
        "title": "Pub Food",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AU"
        ],
        "country_blacklist": []
      },
      {
        "alias": "publicadjusters",
        "title": "Public Adjusters",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "publicart",
        "title": "Public Art",
        "parent_aliases": [
          "localflavor"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "publicmarkets",
        "title": "Public Markets",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "publicplazas",
        "title": "Public Plazas",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "BE",
          "CA",
          "GB",
          "IE",
          "NL",
          "NZ",
          "US"
        ]
      },
      {
        "alias": "publicrelations",
        "title": "Public Relations",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "publicservicesgovt",
        "title": "Public Services & Government",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "publictransport",
        "title": "Public Transportation",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pubs",
        "title": "Pubs",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pueblan",
        "title": "Pueblan",
        "parent_aliases": [
          "mexican"
        ],
        "country_whitelist": [
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "puertorican",
        "title": "Puerto Rican",
        "parent_aliases": [
          "caribbean"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pulmonologist",
        "title": "Pulmonologist",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "pulquerias",
        "title": "Pulquerias",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "pumpkinpatches",
        "title": "Pumpkin Patches",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "qigong",
        "title": "Qi Gong",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "races",
        "title": "Races & Competitions",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CA",
          "CL",
          "ES",
          "FI",
          "HK",
          "IE",
          "IT",
          "JP",
          "MX",
          "MY",
          "PH",
          "PT",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "racetracks",
        "title": "Race Tracks",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "BR",
          "CH",
          "DE",
          "IE",
          "SG"
        ]
      },
      {
        "alias": "racingexperience",
        "title": "Racing Experience",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "FR",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "radiologists",
        "title": "Radiologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "radiostations",
        "title": "Radio Stations",
        "parent_aliases": [
          "massmedia"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "rafting",
        "title": "Rafting/Kayaking",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "ramen",
        "title": "Ramen",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "ranches",
        "title": "Ranches",
        "parent_aliases": [
          "farms"
        ],
        "country_whitelist": [
          "AR",
          "CL",
          "CZ",
          "ES",
          "MX",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "raw_food",
        "title": "Live/Raw Food",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "realestate",
        "title": "Real Estate",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "realestateagents",
        "title": "Real Estate Agents",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "realestatelawyers",
        "title": "Real Estate Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "realestatesvcs",
        "title": "Real Estate Services",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "record_labels",
        "title": "Record Labels",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "AT",
          "BR",
          "CH",
          "CZ",
          "DE",
          "DK",
          "NO",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "recording_studios",
        "title": "Recording & Rehearsal Studios",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "recreation",
        "title": "Recreation Centers",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "recyclingcenter",
        "title": "Recycling Center",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "refinishing",
        "title": "Refinishing Services",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "reflexology",
        "title": "Reflexology",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI",
          "PL",
          "SE",
          "TR"
        ]
      },
      {
        "alias": "registrationservices",
        "title": "Registration Services",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "DK",
          "ES",
          "MX",
          "NO"
        ]
      },
      {
        "alias": "registry_office",
        "title": "Registry Office",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "BR",
          "CH",
          "CZ",
          "DE",
          "DK",
          "FI",
          "IT",
          "NL",
          "NO",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "rehabilitation_center",
        "title": "Rehabilitation Center",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "FR",
          "HK",
          "MY",
          "PH",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "reiki",
        "title": "Reiki",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "HK",
          "JP",
          "MX"
        ]
      },
      {
        "alias": "religiousitems",
        "title": "Religious Items",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "religiousorgs",
        "title": "Religious Organizations",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "religiousschools",
        "title": "Religious Schools",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "BR",
          "CL",
          "CZ",
          "DK",
          "ES",
          "MX",
          "MY",
          "NO",
          "NZ",
          "PH",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "rentfurniture",
        "title": "Furniture Rental",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "BE",
          "CA",
          "CL",
          "ES",
          "JP",
          "MX",
          "NL",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "reproductivehealthservices",
        "title": "Reproductive Health Services",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "reptileshops",
        "title": "Reptile Shops",
        "parent_aliases": [
          "petstore"
        ],
        "country_whitelist": [
          "BE",
          "DE",
          "DK",
          "ES",
          "IT",
          "JP",
          "NL",
          "NO",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "residences",
        "title": "Residences",
        "parent_aliases": [
          "hotels"
        ],
        "country_whitelist": [
          "CZ",
          "ES",
          "IT",
          "SG",
          "CH",
          "DE",
          "US",
          "AT",
          "PH",
          "MY",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "resorts",
        "title": "Resorts",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "restaurants",
        "title": "All Restaurant Types",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "reststops",
        "title": "Rest Stops",
        "parent_aliases": [
          "hotels"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "retinaspecialists",
        "title": "Retina Specialists",
        "parent_aliases": [
          "opthamalogists"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE",
          "FR"
        ]
      },
      {
        "alias": "retirement_homes",
        "title": "Retirement Homes",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "reunion",
        "title": "Reunion",
        "parent_aliases": [
          "french"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "AT",
          "AU",
          "BR",
          "CH",
          "CL",
          "DE",
          "DK",
          "JP",
          "MX",
          "NO",
          "NZ",
          "PL",
          "TR"
        ]
      },
      {
        "alias": "reupholstery",
        "title": "Furniture Reupholstery",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "rhematologists",
        "title": "Rheumatologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "CA",
          "FI",
          "GB",
          "HK",
          "IE",
          "JP",
          "NZ",
          "PL",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "rhinelandian",
        "title": "Rhinelandian",
        "parent_aliases": [
          "german"
        ],
        "country_whitelist": [
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "ribatejo",
        "title": "Ribatejo",
        "parent_aliases": [
          "portuguese"
        ],
        "country_whitelist": [
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "riceshop",
        "title": "Rice",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "JP",
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "roadsideassist",
        "title": "Roadside Assistance",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "FI",
          "FR",
          "GB",
          "HK",
          "IE",
          "NZ",
          "PT",
          "SE",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "robatayaki",
        "title": "Robatayaki",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "HK",
          "JP",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "rock_climbing",
        "title": "Rock Climbing",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "rodeo",
        "title": "Rodeo",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "rodizios",
        "title": "Rodizios",
        "parent_aliases": [
          "brazilian"
        ],
        "country_whitelist": [
          "AR",
          "BR",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "rolfing",
        "title": "Rolfing",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "roman",
        "title": "Roman",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "FR",
          "IT",
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "romanian",
        "title": "Romanian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "CH",
          "CZ",
          "DE",
          "ES",
          "FR",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "roofing",
        "title": "Roofing",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "roofinspectors",
        "title": "Roof Inspectors",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "US",
          "CA"
        ],
        "country_blacklist": []
      },
      {
        "alias": "rotisserie_chicken",
        "title": "Rotisserie Chicken",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "BE",
          "BR",
          "CL",
          "ES",
          "FR",
          "IT",
          "MX",
          "NL",
          "NZ",
          "PL",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "rugs",
        "title": "Rugs",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "CZ",
          "DE",
          "HK",
          "IE",
          "JP",
          "PL"
        ]
      },
      {
        "alias": "rumanian",
        "title": "Rumanian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "russian",
        "title": "Russian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "rv_dealers",
        "title": "RV Dealers",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "AU",
          "CL",
          "GB",
          "HK",
          "IE",
          "JP",
          "MX",
          "MY",
          "NZ",
          "PH",
          "PT",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "rvparks",
        "title": "RV Parks",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [
          "BE",
          "FR",
          "DK",
          "DE",
          "FI",
          "NL",
          "NO",
          "TR",
          "NZ",
          "PL",
          "CH",
          "CL",
          "CA",
          "IT",
          "CZ",
          "AR",
          "AU",
          "AT",
          "IE",
          "ES",
          "US",
          "SG",
          "MX",
          "SE",
          "GB"
        ],
        "country_blacklist": []
      },
      {
        "alias": "rvrental",
        "title": "RV Rental",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "SG"
        ]
      },
      {
        "alias": "rvrepair",
        "title": "RV Repair",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "CA",
          "US",
          "BE",
          "CH",
          "NL",
          "DK",
          "PT",
          "NO",
          "SG",
          "DE",
          "MY",
          "NZ",
          "AU",
          "AT",
          "BR",
          "PH",
          "IE",
          "PL",
          "GB"
        ],
        "country_blacklist": []
      },
      {
        "alias": "ryokan",
        "title": "Ryokan",
        "parent_aliases": [
          "hotels"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "safestores",
        "title": "Safe Stores",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "safetyequipment",
        "title": "Safety Equipment",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sailing",
        "title": "Sailing",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sakebars",
        "title": "Sake Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "salad",
        "title": "Salad",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "salumerie",
        "title": "Salumerie",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "AR",
          "CL",
          "ES",
          "IT",
          "MX",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "salvadoran",
        "title": "Salvadoran",
        "parent_aliases": [
          "latin"
        ],
        "country_whitelist": [
          "CA",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "sambaschools",
        "title": "Samba Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [
          "BR",
          "FI",
          "IT",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "sandblasting",
        "title": "Sandblasting",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "BR",
          "CH",
          "DE",
          "ES",
          "IT",
          "NL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "sandwiches",
        "title": "Sandwiches",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sardinian",
        "title": "Sardinian",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "FR",
          "IT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "saunainstallation",
        "title": "Sauna Installation & Repair",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "AT",
          "AU",
          "CA",
          "CH",
          "CZ",
          "DE",
          "DK",
          "FI",
          "GB",
          "IE",
          "IT",
          "NO",
          "NZ",
          "SE",
          "SG",
          "PL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "saunas",
        "title": "Saunas",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "CA",
          "ES",
          "MY",
          "NZ",
          "PH",
          "PL",
          "SG"
        ]
      },
      {
        "alias": "scandinavian",
        "title": "Scandinavian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "PT"
        ]
      },
      {
        "alias": "scandinaviandesign",
        "title": "Scandinavian Design",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [
          "DK",
          "FI",
          "NO",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "scavengerhunts",
        "title": "Scavenger Hunts",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "schnitzel",
        "title": "Schnitzel",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "scooterrentals",
        "title": "Scooter Rentals",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "scootertours",
        "title": "Scooter Tours",
        "parent_aliases": [
          "tours"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "scottish",
        "title": "Scottish",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "CA",
          "CH",
          "DE",
          "GB",
          "IE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "screen_printing_tshirt_printing",
        "title": "Screen Printing/T-Shirt Printing",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CA",
          "CZ",
          "FI",
          "GB",
          "HK",
          "IE",
          "IT",
          "NZ",
          "PL",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "screenprinting",
        "title": "Screen Printing",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "scuba",
        "title": "Scuba Diving",
        "parent_aliases": [
          "diving"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "seafood",
        "title": "Seafood",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "seafoodmarkets",
        "title": "Seafood Markets",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "seasonaldecorservices",
        "title": "Holiday Decorating Services",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "BE",
          "CH",
          "DE",
          "DK",
          "FR",
          "IT",
          "JP",
          "NL",
          "NO",
          "TR"
        ]
      },
      {
        "alias": "security",
        "title": "Security Services",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "NZ"
        ]
      },
      {
        "alias": "securitysystems",
        "title": "Security Systems",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "selfdefenseclasses",
        "title": "Self-defense Classes",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "selfstorage",
        "title": "Self Storage",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "senegalese",
        "title": "Senegalese",
        "parent_aliases": [
          "african"
        ],
        "country_whitelist": [
          "BE",
          "CA",
          "FR",
          "IT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "seniorcenters",
        "title": "Senior Centers",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "septicservices",
        "title": "Septic Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "BE",
          "BR",
          "CA",
          "DK",
          "NL",
          "NO",
          "PL",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "serbocroatian",
        "title": "Serbo Croatian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AR",
          "AT",
          "BE",
          "CH",
          "CL",
          "CZ",
          "DE",
          "FR",
          "IT",
          "PL",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "service_stations",
        "title": "Service Stations",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "CZ",
          "DK",
          "FI",
          "FR",
          "HK",
          "JP",
          "MY",
          "NO",
          "PH",
          "PT",
          "SE",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "servicestations",
        "title": "Gas Stations",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sessionphotography",
        "title": "Session Photography",
        "parent_aliases": [
          "photographers"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sewingalterations",
        "title": "Sewing & Alterations",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sextherapists",
        "title": "Sex Therapists",
        "parent_aliases": [
          "c_and_mh"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "shanghainese",
        "title": "Shanghainese",
        "parent_aliases": [
          "chinese"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "FR",
          "HK",
          "IT",
          "JP",
          "MY",
          "SE",
          "SG",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "sharedofficespaces",
        "title": "Shared Office Spaces",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sharedtaxis",
        "title": "Shared Taxis",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [
          "BR",
          "DK",
          "NO",
          "PH",
          "SE",
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "shavedice",
        "title": "Shaved Ice",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "AR",
          "CL",
          "CZ",
          "IT",
          "JP",
          "MX",
          "SG",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "shavedsnow",
        "title": "Shaved Snow",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "CA",
          "HK",
          "MY",
          "SG",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "shedsandoutdoorstorage",
        "title": "Sheds & Outdoor Storage",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "DK",
          "ES",
          "FI",
          "FR",
          "HK",
          "JP",
          "NO",
          "SE",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "shipping_centers",
        "title": "Shipping Centers",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "NO",
          "SE"
        ]
      },
      {
        "alias": "shoerepair",
        "title": "Shoe Repair",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "shoes",
        "title": "Shoe Stores",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "shoeshine",
        "title": "Shoe Shine",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "NL"
        ]
      },
      {
        "alias": "shopping",
        "title": "Shopping",
        "parent_aliases": [],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "shoppingcenters",
        "title": "Shopping Centers",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "shoppingpassages",
        "title": "Shopping Passages",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "US"
        ]
      },
      {
        "alias": "shredding",
        "title": "Shredding Services",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [
          "AT",
          "AU",
          "BE",
          "CA",
          "CH",
          "CZ",
          "DE",
          "GB",
          "IE",
          "NL",
          "NZ",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "shrines",
        "title": "Shrines",
        "parent_aliases": [
          "religiousorgs"
        ],
        "country_whitelist": [
          "AR",
          "CL",
          "ES",
          "JP",
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "shutters",
        "title": "Shutters",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sicilian",
        "title": "Sicilian",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "CZ",
          "FR",
          "IT",
          "PL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "signature_cuisine",
        "title": "Signature Cuisine",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AR",
          "CL",
          "DK",
          "ES",
          "MX",
          "NO",
          "PT",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "signmaking",
        "title": "Signmaking",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sikhtemples",
        "title": "Sikh Temples",
        "parent_aliases": [
          "religiousorgs"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "silentdisco",
        "title": "Silent Disco",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "JP"
        ]
      },
      {
        "alias": "singaporean",
        "title": "Singaporean",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "DK",
          "ES",
          "FI",
          "PT",
          "TR"
        ]
      },
      {
        "alias": "skate_parks",
        "title": "Skate Parks",
        "parent_aliases": [
          "parks"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "skateshops",
        "title": "Skate Shops",
        "parent_aliases": [
          "sportgoods"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "skatingrinks",
        "title": "Skating Rinks",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "skiing",
        "title": "Skiing",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "BR",
          "FR",
          "GB",
          "HK",
          "IE",
          "IT",
          "MX",
          "MY",
          "PH",
          "PL",
          "SG",
          "TR",
          "TW",
          "US"
        ]
      },
      {
        "alias": "skillednursing",
        "title": "Skilled Nursing",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "skincare",
        "title": "Skin Care",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "skiresorts",
        "title": "Ski Resorts",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "DK",
          "MX",
          "SG"
        ]
      },
      {
        "alias": "skischools",
        "title": "Ski Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "skishops",
        "title": "Ski & Snowboard Shops",
        "parent_aliases": [
          "sportgoods"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "DK",
          "HK",
          "MX",
          "MY",
          "PH",
          "PT",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "skydiving",
        "title": "Skydiving",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sledding",
        "title": "Sledding",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "AT",
          "CA",
          "CH",
          "CZ",
          "DE",
          "FI",
          "IT",
          "NO",
          "NZ",
          "PT",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "sleepspecialists",
        "title": "Sleep Specialists",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sleepwear",
        "title": "Sleepwear",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [
          "AU",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "slovakian",
        "title": "Slovakian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "CA",
          "CZ",
          "FR",
          "GB",
          "IE",
          "IT",
          "PL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "smog_check_stations",
        "title": "Smog Check Stations",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "DK",
          "FI",
          "NO",
          "SE"
        ]
      },
      {
        "alias": "smokehouse",
        "title": "Smokehouse",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "FR",
          "IT",
          "MX",
          "PL",
          "TR"
        ]
      },
      {
        "alias": "smokingareas",
        "title": "Smoking Areas",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "snorkeling",
        "title": "Snorkeling",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE"
        ]
      },
      {
        "alias": "snowremoval",
        "title": "Snow Removal",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "HK",
          "MX",
          "NZ"
        ]
      },
      {
        "alias": "snuggleservices",
        "title": "Snuggle Services",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "JP",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "soba",
        "title": "Soba",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "social_clubs",
        "title": "Social Clubs",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "socialsecuritylaw",
        "title": "Social Security Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "PL"
        ]
      },
      {
        "alias": "softwaredevelopment",
        "title": "Software Development",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "solarinstallation",
        "title": "Solar Installation",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "solarpanelcleaning",
        "title": "Solar Panel Cleaning",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "somali",
        "title": "Somali",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE",
          "IT",
          "PL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "sommelierservices",
        "title": "Sommelier Services",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR"
        ]
      },
      {
        "alias": "sophrologists",
        "title": "Sophrologists",
        "parent_aliases": [
          "c_and_mh"
        ],
        "country_whitelist": [
          "BE",
          "CZ",
          "FR",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "soulfood",
        "title": "Soul Food",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "CA",
          "ES",
          "GB",
          "IE",
          "NL",
          "NO",
          "PL",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "soup",
        "title": "Soup",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "southafrican",
        "title": "South African",
        "parent_aliases": [
          "african"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "CA",
          "FR",
          "IT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "southern",
        "title": "Southern",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "CA",
          "GB",
          "IE",
          "NL",
          "NZ",
          "PL",
          "SE",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "souvenirs",
        "title": "Souvenir Shops",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CA",
          "SG"
        ]
      },
      {
        "alias": "spanish",
        "title": "Spanish",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "spas",
        "title": "Day Spas",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "speakeasies",
        "title": "Speakeasies",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "DK",
          "IT",
          "NO",
          "TR"
        ]
      },
      {
        "alias": "specialbikes",
        "title": "Special Bikes",
        "parent_aliases": [
          "bicycles"
        ],
        "country_whitelist": [
          "DK",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "specialed",
        "title": "Special Education",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI"
        ]
      },
      {
        "alias": "specialtyschools",
        "title": "Specialty Schools",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "speech_therapists",
        "title": "Speech Therapists",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "speechtraining",
        "title": "Speech Training",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "spermclinic",
        "title": "Sperm Clinic",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [
          "AR",
          "BE",
          "CL",
          "DE",
          "DK",
          "ES",
          "FR",
          "IT",
          "MX",
          "NL",
          "NO",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "spinclasses",
        "title": "Spin Classes",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "spinesurgeons",
        "title": "Spine Surgeons",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "spiritism",
        "title": "Spiritism",
        "parent_aliases": [
          "religiousorgs"
        ],
        "country_whitelist": [
          "BR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "spiritual_shop",
        "title": "Spiritual Shop",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sport_equipment_hire",
        "title": "Sport Equipment Hire",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "CL",
          "CZ",
          "DK",
          "ES",
          "MX",
          "NO",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "sportgoods",
        "title": "Sporting Goods",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sports_clubs",
        "title": "Sports Clubs",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sportsbars",
        "title": "Sports Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH"
        ]
      },
      {
        "alias": "sportsbetting",
        "title": "Sports Betting",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [
          "IT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "sportsmed",
        "title": "Sports Medicine",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sportspsychologists",
        "title": "Sports Psychologists",
        "parent_aliases": [
          "c_and_mh"
        ],
        "country_whitelist": [
          "IT",
          "NZ",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "sportsteams",
        "title": "Professional Sports Teams",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sportswear",
        "title": "Sports Wear",
        "parent_aliases": [
          "fashion",
          "sportgoods"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "spraytanning",
        "title": "Spray Tanning",
        "parent_aliases": [
          "tanning"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "CA",
          "IE",
          "PL",
          "SE"
        ]
      },
      {
        "alias": "squash",
        "title": "Squash",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "NZ",
          "PT",
          "SG"
        ]
      },
      {
        "alias": "srilankan",
        "title": "Sri Lankan",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "stadiumsarenas",
        "title": "Stadiums & Arenas",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "stationery",
        "title": "Cards & Stationery",
        "parent_aliases": [
          "eventservices",
          "artsandcrafts",
          "flowers"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "steak",
        "title": "Steakhouses",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "stereo_installation",
        "title": "Car Stereo Installation",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DK"
        ]
      },
      {
        "alias": "stockings",
        "title": "Stockings",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "CH",
          "CZ",
          "DE",
          "NL",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "stonemasons",
        "title": "Stonemasons",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "streetart",
        "title": "Street Art",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CA",
          "CH",
          "FI",
          "GB",
          "IE",
          "MY",
          "SG",
          "TR",
          "US"
        ]
      },
      {
        "alias": "streetvendors",
        "title": "Street Vendors",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "stripclubs",
        "title": "Strip Clubs",
        "parent_aliases": [
          "adultentertainment"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "stripteasedancers",
        "title": "Striptease Dancers",
        "parent_aliases": [
          "adultentertainment"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CA",
          "US"
        ]
      },
      {
        "alias": "structuralengineers",
        "title": "Structural Engineers",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "stucco",
        "title": "Stucco Services",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "studiotaping",
        "title": "Studio Taping",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [
          "BE",
          "NL",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "sud_ouest",
        "title": "French Southwest",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "BE",
          "FR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "sugaring",
        "title": "Sugaring",
        "parent_aliases": [
          "hairremoval"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "CZ",
          "DE",
          "DK",
          "FI",
          "NO",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "sugarshacks",
        "title": "Sugar Shacks",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "CA"
        ],
        "country_blacklist": []
      },
      {
        "alias": "sukiyaki",
        "title": "Sukiyaki",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "summer_camps",
        "title": "Summer Camps",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sunglasses",
        "title": "Sunglasses",
        "parent_aliases": [
          "opticians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "supperclubs",
        "title": "Supper Clubs",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "CA",
          "ES",
          "GB",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "suppliesrestaurant",
        "title": "Restaurant Supplies",
        "parent_aliases": [
          "wholesalers"
        ],
        "country_whitelist": [
          "BE",
          "CH",
          "NL",
          "DK",
          "CL",
          "IE",
          "CA",
          "DE",
          "JP",
          "IT",
          "US",
          "PL",
          "NO",
          "NZ",
          "AR",
          "AU",
          "AT",
          "SG",
          "MX",
          "ES",
          "GB"
        ],
        "country_blacklist": []
      },
      {
        "alias": "surfing",
        "title": "Surfing",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "AR",
          "BR",
          "CL",
          "DE",
          "DK",
          "ES",
          "FR",
          "IT",
          "JP",
          "MX",
          "NL",
          "NZ",
          "PT",
          "SE",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "surflifesaving",
        "title": "Surf Lifesaving",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "AR",
          "AU",
          "BR",
          "CL",
          "ES",
          "MX",
          "NZ",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "surfschools",
        "title": "Surf Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "surfshop",
        "title": "Surf Shop",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "BR",
          "CA",
          "CZ",
          "FI",
          "FR",
          "IE",
          "NL",
          "NO",
          "SE",
          "SG"
        ]
      },
      {
        "alias": "surgeons",
        "title": "Surgeons",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "sushi",
        "title": "Sushi Bars",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "swabian",
        "title": "Swabian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AT",
          "CH",
          "DE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "swedish",
        "title": "Swedish",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "swimminglessons",
        "title": "Swimming Lessons/Schools",
        "parent_aliases": [
          "fitness",
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "swimmingpools",
        "title": "Swimming Pools",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "swimwear",
        "title": "Swimwear",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "swissfood",
        "title": "Swiss Food",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AR",
          "CH",
          "CL",
          "CZ",
          "DE",
          "ES",
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "synagogues",
        "title": "Synagogues",
        "parent_aliases": [
          "religiousorgs"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "syrian",
        "title": "Syrian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "szechuan",
        "title": "Szechuan",
        "parent_aliases": [
          "chinese"
        ],
        "country_whitelist": [
          "AU",
          "FR",
          "GB",
          "HK",
          "IE",
          "JP",
          "MY",
          "NZ",
          "SG",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tabac",
        "title": "Tabac",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [
          "BE",
          "CZ",
          "ES",
          "FR",
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tabernas",
        "title": "Tabernas",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "ES",
          "PT",
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tablaoflamenco",
        "title": "Tablao Flamenco",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [
          "AR",
          "CL",
          "ES",
          "MX",
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tabletopgames",
        "title": "Tabletop Games",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tableware",
        "title": "Tableware",
        "parent_aliases": [
          "homeandgarden"
        ],
        "country_whitelist": [
          "AR",
          "AT",
          "BE",
          "BR",
          "CH",
          "CL",
          "CZ",
          "DE",
          "DK",
          "FR",
          "MX",
          "NL",
          "NO",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tacos",
        "title": "Tacos",
        "parent_aliases": [
          "mexican"
        ],
        "country_whitelist": [
          "MX",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "taekwondo",
        "title": "Taekwondo",
        "parent_aliases": [
          "martialarts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "taichi",
        "title": "Tai Chi",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "taiwanese",
        "title": "Taiwanese",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "ES",
          "FI",
          "PT",
          "TR"
        ]
      },
      {
        "alias": "taiyaki",
        "title": "Taiyaki",
        "parent_aliases": [
          "jpsweets"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "takoyaki",
        "title": "Takoyaki",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "talentagencies",
        "title": "Talent Agencies",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "AU",
          "CA",
          "CH",
          "CZ",
          "GB",
          "HK",
          "IE",
          "NZ",
          "SG",
          "TR"
        ]
      },
      {
        "alias": "tamales",
        "title": "Tamales",
        "parent_aliases": [
          "mexican"
        ],
        "country_whitelist": [
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tanning",
        "title": "Tanning",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tanningbeds",
        "title": "Tanning Beds",
        "parent_aliases": [
          "tanning"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "FI",
          "PL",
          "SE"
        ]
      },
      {
        "alias": "taoisttemples",
        "title": "Taoist Temples",
        "parent_aliases": [
          "religiousorgs"
        ],
        "country_whitelist": [
          "HK",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tapas",
        "title": "Tapas Bars",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "FI",
          "SG"
        ]
      },
      {
        "alias": "tapasmallplates",
        "title": "Tapas/Small Plates",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tastingclasses",
        "title": "Tasting Classes",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tattoo",
        "title": "Tattoo",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tattooremoval",
        "title": "Tattoo Removal",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tavolacalda",
        "title": "Tavola Calda",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "taxidermy",
        "title": "Taxidermy",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "CA",
          "CZ",
          "DK",
          "FI",
          "IE",
          "NL",
          "NO",
          "NZ",
          "SE",
          "SG"
        ]
      },
      {
        "alias": "taxis",
        "title": "Taxis",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "taxlaw",
        "title": "Tax Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "BR",
          "CZ",
          "DE",
          "FR",
          "SG",
          "US",
          "CH",
          "AT",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "taxoffice",
        "title": "Tax Office",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CA",
          "ES",
          "PL",
          "SG",
          "US"
        ]
      },
      {
        "alias": "taxservices",
        "title": "Tax Services",
        "parent_aliases": [
          "financialservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tcm",
        "title": "Traditional Chinese Medicine",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "tea",
        "title": "Tea Rooms",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "teachersupplies",
        "title": "Teacher Supplies",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FR",
          "IT"
        ]
      },
      {
        "alias": "teambuilding",
        "title": "Team Building Activities",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "teethwhitening",
        "title": "Teeth Whitening",
        "parent_aliases": [
          "beautysvc"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE"
        ]
      },
      {
        "alias": "telecommunications",
        "title": "Telecommunications",
        "parent_aliases": [
          "itservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "JP",
          "MX"
        ]
      },
      {
        "alias": "televisionserviceproviders",
        "title": "Television Service Providers",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "televisionstations",
        "title": "Television Stations",
        "parent_aliases": [
          "massmedia"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tempura",
        "title": "Tempura",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP",
          "SG",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tenantlaw",
        "title": "Tenant and Eviction Law",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ"
        ]
      },
      {
        "alias": "tennis",
        "title": "Tennis",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "teochew",
        "title": "Teochew",
        "parent_aliases": [
          "chinese"
        ],
        "country_whitelist": [
          "HK",
          "MY",
          "SG",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "teppanyaki",
        "title": "Teppanyaki",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "AU",
          "HK",
          "JP",
          "MX",
          "NZ",
          "SG",
          "TW",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "testprep",
        "title": "Test Preparation",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tex-mex",
        "title": "Tex-Mex",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "DK",
          "ES",
          "PT"
        ]
      },
      {
        "alias": "thai",
        "title": "Thai",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "theater",
        "title": "Performing Arts",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "themedcafes",
        "title": "Themed Cafes",
        "parent_aliases": [
          "cafes"
        ],
        "country_whitelist": [
          "BE",
          "DE",
          "FI",
          "FR",
          "HK",
          "JP",
          "MY",
          "NL",
          "PH",
          "PL",
          "SG",
          "TW",
          "US",
          "CH",
          "DK",
          "CL",
          "CA",
          "NO",
          "NZ",
          "AR",
          "AU",
          "GB",
          "IE",
          "MX",
          "SE",
          "AT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "threadingservices",
        "title": "Threading Services",
        "parent_aliases": [
          "hairremoval"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "thrift_stores",
        "title": "Thrift Stores",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI"
        ]
      },
      {
        "alias": "tickets",
        "title": "Tickets",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [
          "CL",
          "CZ",
          "DK",
          "FI",
          "NO",
          "PL",
          "PT",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "ticketsales",
        "title": "Ticket Sales",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "ES",
          "FI",
          "GB",
          "IE",
          "NL",
          "NZ",
          "PL",
          "SE",
          "SG",
          "TR"
        ]
      },
      {
        "alias": "tikibars",
        "title": "Tiki Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE",
          "FR",
          "JP",
          "PL",
          "TR"
        ]
      },
      {
        "alias": "tiling",
        "title": "Tiling",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "BR",
          "CA",
          "FI",
          "GB",
          "HK",
          "IE",
          "JP",
          "MY",
          "NL",
          "PH",
          "PL",
          "PT",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "tires",
        "title": "Tires",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "titleloans",
        "title": "Title Loans",
        "parent_aliases": [
          "financialservices"
        ],
        "country_whitelist": [
          "CA",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tobaccoshops",
        "title": "Tobacco Shops",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tofu",
        "title": "Tofu Shops",
        "parent_aliases": [
          "gourmet"
        ],
        "country_whitelist": [
          "JP"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tonkatsu",
        "title": "Tonkatsu",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP",
          "SG",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "torshi",
        "title": "Torshi",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tortillas",
        "title": "Tortillas",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tours",
        "title": "Tours",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "towing",
        "title": "Towing",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "towncarservice",
        "title": "Town Car Service",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [
          "BE",
          "NL",
          "IE",
          "MY",
          "CA",
          "US",
          "HK",
          "NZ",
          "AU",
          "GB",
          "TW",
          "PH",
          "SG"
        ],
        "country_blacklist": []
      },
      {
        "alias": "townhall",
        "title": "Town Hall",
        "parent_aliases": [
          "publicservicesgovt"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AU",
          "CA",
          "FI",
          "GB",
          "HK",
          "IE",
          "JP",
          "MY",
          "NZ",
          "PH",
          "PL",
          "SG",
          "TW"
        ]
      },
      {
        "alias": "toxicologists",
        "title": "Toxicologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "toys",
        "title": "Toy Stores",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tradamerican",
        "title": "American",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tradclothing",
        "title": "Traditional Clothing",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tradefairs",
        "title": "Trade Fairs",
        "parent_aliases": [
          "festivals"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "CH",
          "CZ",
          "DE",
          "DK",
          "FI",
          "IT",
          "JP",
          "MX",
          "NL",
          "NO",
          "NZ",
          "PT",
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "traditional_swedish",
        "title": "Traditional Swedish",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "FI",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "trafficschools",
        "title": "Traffic Schools",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "trafficticketinglaw",
        "title": "Traffic Ticketing Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "trailerdealers",
        "title": "Trailer Dealers",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "AU",
          "CA",
          "DE",
          "DK",
          "GB",
          "IE",
          "NO",
          "NZ",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "trailerrental",
        "title": "Trailer Rental",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "trailerrepair",
        "title": "Trailer Repair",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "AU",
          "CA",
          "DK",
          "GB",
          "IE",
          "NO",
          "NZ",
          "SG",
          "US",
          "BE",
          "CH",
          "NL",
          "PT",
          "SE",
          "DE",
          "AT",
          "BR",
          "PH",
          "MY",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "trains",
        "title": "Trains",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "CL",
          "ES",
          "FI",
          "HK",
          "IT",
          "JP",
          "MX",
          "MY",
          "NZ",
          "PH",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "trainstations",
        "title": "Train Stations",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "trampoline",
        "title": "Trampoline Parks",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "BR",
          "CL",
          "ES",
          "HK",
          "JP",
          "MX",
          "MY",
          "NZ",
          "PH",
          "SG",
          "TW"
        ]
      },
      {
        "alias": "translationservices",
        "title": "Translation Services",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "SE"
        ]
      },
      {
        "alias": "transmissionrepair",
        "title": "Transmission Repair",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE",
          "IT",
          "MY",
          "PH"
        ]
      },
      {
        "alias": "transport",
        "title": "Transportation",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tras_os_montes",
        "title": "Tras-os-Montes",
        "parent_aliases": [
          "portuguese"
        ],
        "country_whitelist": [
          "PT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "trattorie",
        "title": "Trattorie",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AR",
          "CH",
          "CL",
          "FR",
          "IT",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "travelagents",
        "title": "Travel Agents",
        "parent_aliases": [
          "travelservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "IT"
        ]
      },
      {
        "alias": "travelservices",
        "title": "Travel Services",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "treeservices",
        "title": "Tree Services",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "trinidadian",
        "title": "Trinidadian",
        "parent_aliases": [
          "caribbean"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "triviahosts",
        "title": "Trivia Hosts",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "trophyshops",
        "title": "Trophy Shops",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "FI",
          "NZ",
          "SE",
          "SG",
          "TR"
        ]
      },
      {
        "alias": "tropicalmedicine",
        "title": "Tropical Medicine",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [
          "AT",
          "BE",
          "BR",
          "CH",
          "DE",
          "IT",
          "NL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "truck_rental",
        "title": "Truck Rental",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "FI",
          "JP",
          "NL",
          "SE",
          "TR"
        ]
      },
      {
        "alias": "truckdealers",
        "title": "Commercial Truck Dealers",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "CZ",
          "FI",
          "HK",
          "JP",
          "SE",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "truckrepair",
        "title": "Commercial Truck Repair",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "BE",
          "FR",
          "CH",
          "NL",
          "DK",
          "CL",
          "IE",
          "CA",
          "DE",
          "IT",
          "US",
          "NO",
          "NZ",
          "AR",
          "AU",
          "AT",
          "BR",
          "SG",
          "MX",
          "ES",
          "GB",
          "PH",
          "MY",
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tubing",
        "title": "Tubing",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tuina",
        "title": "Tui Na",
        "parent_aliases": [
          "tcm"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "turkish",
        "title": "Turkish",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "turkishravioli",
        "title": "Turkish Ravioli",
        "parent_aliases": [
          "turkish"
        ],
        "country_whitelist": [
          "TR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tuscan",
        "title": "Tuscan",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "FR",
          "IT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "tutoring",
        "title": "Tutoring Centers",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "tvmounting",
        "title": "TV Mounting",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "FR",
          "IT",
          "JP",
          "NL"
        ]
      },
      {
        "alias": "udon",
        "title": "Udon",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "DK",
          "FI",
          "HK",
          "JP",
          "NO",
          "SE",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "ukrainian",
        "title": "Ukrainian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "DK",
          "ES",
          "TR"
        ]
      },
      {
        "alias": "ultrasoundimagingcenters",
        "title": "Ultrasound Imaging Centers",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "unagi",
        "title": "Unagi",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "underseamedicine",
        "title": "Undersea/Hyperbaric Medicine",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "uniforms",
        "title": "Uniforms",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "CZ",
          "IE",
          "JP",
          "NL",
          "SE",
          "TR"
        ]
      },
      {
        "alias": "university_housing",
        "title": "University Housing",
        "parent_aliases": [
          "realestate"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "unofficialyelpevents",
        "title": "Unofficial Yelp Events",
        "parent_aliases": [
          "localflavor"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "urgent_care",
        "title": "Urgent Care",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "urologists",
        "title": "Urologists",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "usedbooks",
        "title": "Used Bookstore",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "AU",
          "CL",
          "TR"
        ]
      },
      {
        "alias": "usedcardealers",
        "title": "Used Car Dealers",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "utilities",
        "title": "Utilities",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "CZ",
          "GB",
          "IT",
          "NL",
          "PL",
          "PT",
          "SG",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "uzbek",
        "title": "Uzbek",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "CZ",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "vacation_rentals",
        "title": "Vacation Rentals",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "SG"
        ]
      },
      {
        "alias": "vacationrentalagents",
        "title": "Vacation Rental Agents",
        "parent_aliases": [
          "hotelstravel"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "ES",
          "SG"
        ]
      },
      {
        "alias": "valetservices",
        "title": "Valet Services",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [
          "BR",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "vapeshops",
        "title": "Vape Shops",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "SG"
        ]
      },
      {
        "alias": "vascularmedicine",
        "title": "Vascular Medicine",
        "parent_aliases": [
          "physicians"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "vegan",
        "title": "Vegan",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "vegetarian",
        "title": "Vegetarian",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "vehicleshipping",
        "title": "Vehicle Shipping",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "vehiclewraps",
        "title": "Vehicle Wraps",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BE",
          "FR",
          "TR"
        ]
      },
      {
        "alias": "venetian",
        "title": "Venetian",
        "parent_aliases": [
          "italian"
        ],
        "country_whitelist": [
          "FR",
          "IT"
        ],
        "country_blacklist": []
      },
      {
        "alias": "venezuelan",
        "title": "Venezuelan",
        "parent_aliases": [
          "latin"
        ],
        "country_whitelist": [
          "AR",
          "CA",
          "CL",
          "ES",
          "FR",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "venison",
        "title": "Venison",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AU",
          "CA",
          "CZ",
          "DK",
          "GB",
          "IE",
          "IT",
          "NO",
          "NZ",
          "PL",
          "SG"
        ],
        "country_blacklist": []
      },
      {
        "alias": "venues",
        "title": "Venues & Event Spaces",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "vermouthbars",
        "title": "Vermouth Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "DK",
          "FR",
          "IT",
          "JP",
          "NO",
          "PL",
          "TR"
        ]
      },
      {
        "alias": "vet",
        "title": "Veterinarians",
        "parent_aliases": [
          "pets"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "veteransorganizations",
        "title": "Veterans Organizations",
        "parent_aliases": [
          "social_clubs"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "videoandgames",
        "title": "Videos & Video Game Rental",
        "parent_aliases": [
          "media"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "videofilmproductions",
        "title": "Video/Film Production",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "videogamestores",
        "title": "Video Game Stores",
        "parent_aliases": [
          "media"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "videographers",
        "title": "Videographers",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "vietnamese",
        "title": "Vietnamese",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "vintage",
        "title": "Used, Vintage & Consignment",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "vinyl_records",
        "title": "Vinyl Records",
        "parent_aliases": [
          "media"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "vinylsiding",
        "title": "Siding",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [
          "BE",
          "NL",
          "DK",
          "NO",
          "IE",
          "CA",
          "US",
          "NZ",
          "AU",
          "GB",
          "SG",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "virtualrealitycenters",
        "title": "Virtual Reality Centers",
        "parent_aliases": [
          "arts"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "visitorcenters",
        "title": "Visitor Centers",
        "parent_aliases": [
          "travelservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "vitaminssupplements",
        "title": "Vitamins & Supplements",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "MY",
          "PH"
        ]
      },
      {
        "alias": "vocalcoach",
        "title": "Vocal Coach",
        "parent_aliases": [
          "musicinstrumentservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "vocation",
        "title": "Vocational & Technical School",
        "parent_aliases": [
          "specialtyschools"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "volleyball",
        "title": "Volleyball",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "AT",
          "AU",
          "BR",
          "CZ",
          "DE",
          "DK",
          "FI",
          "FR",
          "JP",
          "NO",
          "NZ",
          "SE",
          "SG"
        ],
        "country_blacklist": []
      },
      {
        "alias": "waffles",
        "title": "Waffles",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "waldorfschools",
        "title": "Waldorf Schools",
        "parent_aliases": [
          "education"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI"
        ]
      },
      {
        "alias": "walkinclinics",
        "title": "Walk-in Clinics",
        "parent_aliases": [
          "medcenters"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE",
          "IT"
        ]
      },
      {
        "alias": "walkingtours",
        "title": "Walking Tours",
        "parent_aliases": [
          "tours"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "wallpapering",
        "title": "Wallpapering",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "watch_repair",
        "title": "Watch Repair",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "watches",
        "title": "Watches",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "waterdelivery",
        "title": "Water Delivery",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "CA",
          "US",
          "HK",
          "BR",
          "PH",
          "MY"
        ],
        "country_blacklist": []
      },
      {
        "alias": "waterheaterinstallrepair",
        "title": "Water Heater Installation/Repair",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "waterparks",
        "title": "Water Parks",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "AT",
          "AU",
          "CH",
          "CL",
          "DE",
          "FI",
          "GB",
          "HK",
          "IE",
          "MY",
          "NZ"
        ]
      },
      {
        "alias": "waterproofing",
        "title": "Waterproofing",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "waterpurification",
        "title": "Water Purification Services",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "waterstores",
        "title": "Water Stores",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "US",
          "CA",
          "MX",
          "BR"
        ],
        "country_blacklist": []
      },
      {
        "alias": "watersuppliers",
        "title": "Water Suppliers",
        "parent_aliases": [
          "utilities"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "watertaxis",
        "title": "Water Taxis",
        "parent_aliases": [
          "transport"
        ],
        "country_whitelist": [
          "AU",
          "GB",
          "IE",
          "IT",
          "MX",
          "NZ"
        ],
        "country_blacklist": []
      },
      {
        "alias": "waxing",
        "title": "Waxing",
        "parent_aliases": [
          "hairremoval"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "web_design",
        "title": "Web Design",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "wedding_planning",
        "title": "Wedding Planning",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "weddingchappels",
        "title": "Wedding Chapels",
        "parent_aliases": [
          "eventservices"
        ],
        "country_whitelist": [
          "AU",
          "JP",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "weightlosscenters",
        "title": "Weight Loss Centers",
        "parent_aliases": [
          "health"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "welldrilling",
        "title": "Well Drilling",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "AR",
          "BR",
          "CL",
          "CZ",
          "DK",
          "ES",
          "IT",
          "MX",
          "NO",
          "PL",
          "US",
          "CH",
          "DE",
          "MY",
          "AT",
          "PH"
        ],
        "country_blacklist": []
      },
      {
        "alias": "westernjapanese",
        "title": "Western Style Japanese Food",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP",
          "SG",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "whalewatchingtours",
        "title": "Whale Watching Tours",
        "parent_aliases": [
          "tours"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE"
        ]
      },
      {
        "alias": "wheelrimrepair",
        "title": "Wheel & Rim Repair",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [
          "IT",
          "PT",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "whiskeybars",
        "title": "Whiskey Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "IT"
        ]
      },
      {
        "alias": "wholesale_stores",
        "title": "Wholesale Stores",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE"
        ]
      },
      {
        "alias": "wholesalers",
        "title": "Wholesalers",
        "parent_aliases": [
          "professional"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "CZ",
          "FI",
          "FR",
          "HK",
          "MY",
          "PH",
          "PT",
          "SE",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "wigs",
        "title": "Wigs",
        "parent_aliases": [
          "shopping"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "BR",
          "CH",
          "GB",
          "HK",
          "IE",
          "JP",
          "MY",
          "NZ",
          "PH",
          "SE",
          "SG",
          "TR",
          "TW"
        ]
      },
      {
        "alias": "wildlifecontrol",
        "title": "Wildlife Control",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "JP"
        ]
      },
      {
        "alias": "wildlifehunting",
        "title": "Wildlife Hunting Ranges",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "willstrustsprobates",
        "title": "Wills, Trusts, & Probates",
        "parent_aliases": [
          "estateplanning"
        ],
        "country_whitelist": [
          "BE",
          "NL",
          "IE",
          "CA",
          "IT",
          "US",
          "NZ",
          "AU",
          "GB",
          "SG"
        ],
        "country_blacklist": []
      },
      {
        "alias": "windowsinstallation",
        "title": "Windows Installation",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "windowwashing",
        "title": "Window Washing",
        "parent_aliases": [
          "homeservices"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "windshieldinstallrepair",
        "title": "Windshield Installation & Repair",
        "parent_aliases": [
          "auto"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "CZ",
          "DE"
        ]
      },
      {
        "alias": "wine_bars",
        "title": "Wine Bars",
        "parent_aliases": [
          "bars"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "wineries",
        "title": "Wineries",
        "parent_aliases": [
          "arts",
          "food"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "FI"
        ]
      },
      {
        "alias": "winetasteclasses",
        "title": "Wine Tasting Classes",
        "parent_aliases": [
          "tastingclasses"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "winetastingroom",
        "title": "Wine Tasting Room",
        "parent_aliases": [
          "wineries"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "winetours",
        "title": "Wine Tours",
        "parent_aliases": [
          "tours"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "wok",
        "title": "Wok",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AR",
          "AU",
          "BR",
          "CA",
          "GB",
          "HK",
          "IE",
          "IT",
          "JP",
          "NZ",
          "PL",
          "SG",
          "TR",
          "TW",
          "US"
        ]
      },
      {
        "alias": "womenscloth",
        "title": "Women's Clothing",
        "parent_aliases": [
          "fashion"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "workerscomplaw",
        "title": "Workers Compensation Law",
        "parent_aliases": [
          "lawyers"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "AT",
          "CH",
          "DE",
          "FR"
        ]
      },
      {
        "alias": "wraps",
        "title": "Wraps",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "CZ",
          "DK",
          "NO",
          "PT",
          "SE",
          "TR",
          "US"
        ],
        "country_blacklist": []
      },
      {
        "alias": "xmasmarkets",
        "title": "Christmas Markets",
        "parent_aliases": [
          "festivals"
        ],
        "country_whitelist": [],
        "country_blacklist": [
          "BR",
          "CA",
          "IE",
          "NZ",
          "SG",
          "TR",
          "US"
        ]
      },
      {
        "alias": "yakiniku",
        "title": "Yakiniku",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP",
          "SG",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "yakitori",
        "title": "Yakitori",
        "parent_aliases": [
          "japanese"
        ],
        "country_whitelist": [
          "JP",
          "SG",
          "TW"
        ],
        "country_blacklist": []
      },
      {
        "alias": "yelpevents",
        "title": "Yelp Events",
        "parent_aliases": [
          "localflavor"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "yoga",
        "title": "Yoga",
        "parent_aliases": [
          "fitness"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "youth_club",
        "title": "Youth Club",
        "parent_aliases": [
          "localservices"
        ],
        "country_whitelist": [
          "BE",
          "FR",
          "CH",
          "NL",
          "DK",
          "PT",
          "NO",
          "IE",
          "CA",
          "DE",
          "IT",
          "CZ",
          "NZ",
          "AU",
          "GB",
          "FI",
          "SG",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "yucatan",
        "title": "Yucatan",
        "parent_aliases": [
          "mexican"
        ],
        "country_whitelist": [
          "MX"
        ],
        "country_blacklist": []
      },
      {
        "alias": "yugoslav",
        "title": "Yugoslav",
        "parent_aliases": [
          "restaurants"
        ],
        "country_whitelist": [
          "AU",
          "BE",
          "FR",
          "IT",
          "PT",
          "SE"
        ],
        "country_blacklist": []
      },
      {
        "alias": "zapiekanka",
        "title": "Zapiekanka",
        "parent_aliases": [
          "food"
        ],
        "country_whitelist": [
          "PL"
        ],
        "country_blacklist": []
      },
      {
        "alias": "zipline",
        "title": "Ziplining",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "zoos",
        "title": "Zoos",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [],
        "country_blacklist": []
      },
      {
        "alias": "zorbing",
        "title": "Zorbing",
        "parent_aliases": [
          "active"
        ],
        "country_whitelist": [
          "CZ",
          "ES",
          "MX",
          "NZ",
          "PT",
          "US"
        ],
        "country_blacklist": []
      }
    ]
  };


yelpcategories.categories.map((eachcat)=>{
if (eachcat.alias=='restaurants'||eachcat.alias=='food'||eachcat.alias=='bars'){
  stopcategories.get('x-meal').push({alias: eachcat.alias, title: eachcat.title});
} else if ('reststops,parking,servicestations,evchargingstations,service_stations,deptstores,shoppingcenters,campgrounds,rvparks'.split(',').includes(eachcat.alias)){
  stopcategories.get('x-rest').push({alias: eachcat.alias, title: eachcat.title});
} else if ('hotels,bedbreakfast,campgrounds,guesthouses,hostels,resorts,vacation_rentals,rvparks,skiresorts'.split(',').includes(eachcat.alias)){
  stopcategories.get('x-day').push({alias: eachcat.alias, title: eachcat.title});
}

  eachcat.parent_aliases.map((parent_alias)=>{
    if(stopcategories.has(parent_alias)){
      stopcategories.get(parent_alias).push({alias: eachcat.alias, title: eachcat.title});
    }else{
      stopcategories.set(parent_alias,[{alias: eachcat.alias, title: eachcat.title}])
    }

    
  })
  
  
});
module.exports = {
  stopcategories,
};