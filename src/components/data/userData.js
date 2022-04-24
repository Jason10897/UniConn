export const userTypes = {
    ALUMNI: "ALUMNI",
    STUDENT: "STUDENT"
}

export const departments = {
    CSE: "Computer Science",
    BUS: "Business",
    ENG: "Engineering",
    MED: "Medicine",
    LAW: "Law",
    OTH: "Others"
}

export const Companies = {
    Google: "Google",
    Microsoft: "Microsoft",
    Amazon: "Amazon",
    Apple: "Apple",
    PayPal: "PayPal"
}

export const Locations = {
    NYC: "New York City",
    CHI: "Chicago",
    STL: "Seattle",
    AUS: "Austin",
    SF: "San Francisco"
}

export const defaultFilterState = {
    filter: "All", //Student, Alumni,
    domain: [],
    search: "",
    company: '',
    location: ''
}


export const AlumniUsers = [
    {
        id: 1,
        firstName: "Jane",
        lastName: "Doe",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false,
        profilePh: '/images/profilePhoto5.png'
    },
    {
        id: 2,
        firstName: "Lovell ",
        lastName: "Lyanna",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.PayPal,
        location: Locations.NYC,
        isConnected: true,
        profilePh: '/images/profilePhoto2.png'
    },
    {
        id: 3,
        firstName: "Alanna",
        lastName: "Branda",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Amazon,
        location: Locations.STL,
        isConnected: false,
        profilePh: '/images/profilePhoto5.png'
    },
    {
        id: 4,
        firstName: "Hugo",
        lastName: "Rudyard",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Microsoft,
        location: Locations.STL,
        isConnected: true,
        profilePh: '/images/profilePhoto3.png'
    },
    {
        id: 5,
        firstName: "Emmitt",
        lastName: "Christopher",
        type: userTypes.STUDENT,
        domain: departments.CSE,
        company: Companies.Apple,
        location: Locations.SF,
        isConnected: false,
        profilePh: '/images/profilePhoto4.png'
    },
    {
        id: 6,
        firstName: "Alfred",
        lastName: "Odin",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.SF,
        isConnected: false,
        profilePh: '/images/profilePhoto1.png'
    },
    {
        id: 7,
        firstName: "Arlie",
        lastName: "Brooks",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.PayPal,
        location: Locations.CHI,
        isConnected: false,
        profilePh: '/images/profilePhoto2.png'
    },
    {
        id: 8,
        firstName: "Tara",
        lastName: "Calanthe",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Apple,
        location: Locations.AUS,
        isConnected: true,
        profilePh: '/images/profilePhoto5.png'
    },
    {
        id: 9,
        firstName: "Keith",
        lastName: "Ashlie",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false,
        profilePh: '/images/profilePhoto3.png'
    },
    {
        id: 10,
        firstName: "Melva",
        lastName: "Malene",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Apple,
        location: Locations.SF,
        isConnected: false,
        profilePh: '/images/profilePhoto5.png'
    },
    {
        id: 11,
        firstName: "Leta",
        lastName: "Ever",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Amazon,
        location: Locations.STL,
        isConnected: true,
        profilePh: '/images/profilePhoto1.png'
    },
    {
        id: 12,
        firstName: "Juliana",
        lastName: "Karlene",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false,
        profilePh: '/images/profilePhoto2.png'
    },
    {
        id: 13,
        firstName: "Skylar",
        lastName: "white",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Amazon,
        location: Locations.CHI,
        isConnected: false,
        profilePh: '/images/profilePhoto5.png'
    },
    {
        id: 14,
        firstName: "Walter",
        lastName: "White",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Microsoft,
        location: Locations.AUS,
        isConnected: false,
        profilePh: '/images/profilePhoto3.png'
    },
    {
        id: 15,
        firstName: "Mike",
        lastName: "Schrader",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Apple,
        location: Locations.SF,
        isConnected: false,
        profilePh: '/images/profilePhoto4.png'
    },
    {
        id: 16,
        firstName: "Jesse",
        lastName: "Pinkman",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Amazon,
        location: Locations.AUS,
        isConnected: false,
        profilePh: '/images/profilePhoto1.png'
    },
    {
        id: 17,
        firstName: "Saul",
        lastName: "Goodman",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.AUS,
        isConnected: false,
        profilePh: '/images/profilePhoto4.png'
    },
    {
        id: 18,
        firstName: "Gustavo",
        lastName: "Fring",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Microsoft,
        location: Locations.SF,
        isConnected: false,
        profilePh: '/images/profilePhoto3.png'
    },
    {
        id: 19,
        firstName: "Paulette",
        lastName: "Kriemhild",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.PayPal,
        location: Locations.AUS,
        isConnected: false,
        profilePh: '/images/profilePhoto2.png'
    },
    {
        id: 20,
        firstName: "Aaliyah",
        lastName: "Emberly",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: true,
        profilePh: '/images/profilePhoto5.png'
    },
    {
        id: 21,
        firstName: "Alfred",
        lastName: "Hutheesing",
        type: userTypes.STUDENT,
        domain: departments.LAW,
        company: Companies.Microsoft,
        location: Locations.STL,
        isConnected: false,
        profilePh: '/images/profilePhoto4.png'
    },
    {
        id: 22,
        firstName: "Freedon",
        lastName: "Annunziato",
        type: userTypes.STUDENT,
        domain: departments.BUS,
        company: Companies.Apple,
        location: Locations.CHI,
        isConnected: true,
        profilePh: '/images/profilePhoto3.png'
    },
    {
        id: 23,
        firstName: "Lloyd",
        lastName: "Kellam",
        type: userTypes.STUDENT,
        domain: departments.MED,
        company: Companies.PayPal,
        location: Locations.SF,
        isConnected: false,
        profilePh: '/images/profilePhoto1.png'
    },
    {
        id: 24,
        firstName: "David",
        lastName: "Thares",
        type: userTypes.STUDENT,
        domain: departments.OTH,
        company: Companies.Amazon,
        location: Locations.AUS,
        isConnected: false,
        profilePh: '/images/profilePhoto3.png'
    },
    {
        id: 25,
        firstName: "Jenny",
        lastName: "Goldsmith",
        type: userTypes.STUDENT,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.SF,
        isConnected: true,
        profilePh: '/images/profilePhoto5.png'
    },
    {
        id: 26,
        firstName: "Barbara",
        lastName: "Robichaud",
        type: userTypes.STUDENT,
        domain: departments.ENG,
        company: Companies.Microsoft,
        location: Locations.STL,
        isConnected: false,
        profilePh: '/images/profilePhoto2.png'
    },
    {
        id: 27,
        firstName: "Yvonne",
        lastName: "Williams",
        type: userTypes.STUDENT,
        domain: departments.MED,
        company: Companies.PayPal,
        location: Locations.AUS,
        isConnected: true,
        profilePh: '/images/profilePhoto4.png'
    },
    {
        id: 28,
        firstName: "Reynaldo",
        lastName: "Chatman",
        type: userTypes.STUDENT,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false,
        profilePh: '/images/profilePhoto3.png'
    },
    {
        id: 29,
        firstName: "Madhav",
        lastName: "Dusenberry",
        type: userTypes.STUDENT,
        domain: departments.OTH,
        company: Companies.Amazon,
        location: Locations.STL,
        isConnected: true,
        profilePh: '/images/profilePhoto1.png'
    },
    {
        id: 30,
        firstName: "Jeffrey",
        lastName: "Citron",
        type: userTypes.STUDENT,
        domain: departments.BUS,
        company: Companies.Apple,
        location: Locations.CHI,
        isConnected: false,
        profilePh: '/images/profilePhoto3.png'
    },
    {
        id: 31,
        firstName: "Eric",
        lastName: "Da Silva",
        type: userTypes.STUDENT,
        domain: departments.ENG,
        company: Companies.Microsoft,
        location: Locations.STL,
        isConnected: false,
        profilePh: '/images/profilePhoto4.png'
    },
    {
        id: 32,
        firstName: "Robert",
        lastName: "Segall",
        type: userTypes.STUDENT,
        domain: departments.LAW,
        company: Companies.PayPal,
        location: Locations.AUS,
        isConnected: true,
        profilePh: '/images/profilePhoto1.png'
    }
    

]

