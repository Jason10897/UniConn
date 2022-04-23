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
        isConnected: false
    },
    {
        id: 2,
        firstName: "Lovell ",
        lastName: "Lyanna",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: true
    },
    {
        id: 3,
        firstName: "Alanna",
        lastName: "Branda",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false
    },
    {
        id: 4,
        firstName: "Hugo",
        lastName: "Rudyard",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: true
    },
    {
        id: 5,
        firstName: "Emmitt",
        lastName: "Christopher",
        type: userTypes.STUDENT,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false
    },
    {
        id: 6,
        firstName: "Alfred",
        lastName: "Odin",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false
    },
    {
        id: 7,
        firstName: "Arlie",
        lastName: "Brooks",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false
    },
    {
        id: 8,
        firstName: "Tara",
        lastName: "Calanthe",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: true
    },
    {
        id: 9,
        firstName: "Kiera",
        lastName: "Ashlie",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false
    },
    {
        id: 10,
        firstName: "Melva",
        lastName: "Malene",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false
    },
    {
        id: 11,
        firstName: "Leta",
        lastName: "Ever",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: true
    },
    {
        id: 12,
        firstName: "Juliana",
        lastName: "Karlene",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false
    },
    {
        id: 13,
        firstName: "Skylar",
        lastName: "white",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false
    },
    {
        id: 14,
        firstName: "Walter",
        lastName: "White",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false
    },
    {
        id: 15,
        firstName: "Mike",
        lastName: "Schrader",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false
    },
    {
        id: 16,
        firstName: "Jesse",
        lastName: "Pinkman",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false
    },
    {
        id: 17,
        firstName: "Saul",
        lastName: "Goodman",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false
    },
    {
        id: 18,
        firstName: "Gustavo",
        lastName: "Fring",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false
    },
    {
        id: 19,
        firstName: "Paulette",
        lastName: "Kriemhild",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: false
    },
    {
        id: 20,
        firstName: "Aaliyah",
        lastName: "Emberly",
        type: userTypes.ALUMNI,
        domain: departments.CSE,
        company: Companies.Google,
        location: Locations.NYC,
        isConnected: true
    }

]

