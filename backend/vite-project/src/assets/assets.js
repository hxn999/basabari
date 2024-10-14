
import { faBolt, faBottleDroplet, faCalculator, faElevator, faFire, faGasPump, faPersonMilitaryPointing, faSquareParking, faTty,  faVideo, faWifi } from '@fortawesome/free-solid-svg-icons';
import notFound from '../assets/img/not-found.png'
import bed from '../assets/img/bed.webp'
import balcony from '../assets/img/balcony.png'
import dining from '../assets/img/dining.webp'
import dining2 from '../assets/img/dining2.webp'
import living from '../assets/img/living.webp'
import swiming from '../assets/img/swimming.webp'
import check from '../assets/img/check.png'
import cross from '../assets/img/cross.png'
import { text } from '@fortawesome/fontawesome-svg-core';
import logo from '../assets/img/logo.png'
import page404 from '../assets/img/404.jpg'

export const img = {
    notFound,
    bed,
    balcony,
    dining,
    dining2,
    swiming,
    living,
    check,
    cross,
    logo,
    page404
    
}


export const amenity = {

    natural: {
        text: "Natural Gas",
        icon: faFire
    },
    meter: {
        text: "Prepaid Meter Gas",
        icon: faGasPump
    },
    lpg: {
        text: "LPG Cylinder Gas",
        icon: faBottleDroplet
    },
    prepaid: {
        text: "Prepaid Meter Electricity",
        icon: faCalculator
    },
    postpaid: {
        text: "Postpaid Meter Electricity",
        icon: faBolt
    },
    elevator: {

        text: "Elevetor/Lift",
        icon: faElevator

    },
    wifi: {

        text: "Wi-Fi Internet",
        icon: faWifi
        
    },
    security: {

        text: "Security Guard",
        icon: faPersonMilitaryPointing

    },
    intercom: {

        text: "Inter Communication Telephone",
        icon: faTty

    },
    cctv: {

        text: "CCTV surveillance",
        icon: faVideo

    },
    parking:{
        text:"Parking Area",
        icon:faSquareParking
    }
}
        export const place =  [
            "100 Feet Road", "60 feet (Kallyanpur )", "Adabor(Mohammadpur)", "Adarsha Nagar (Badda)",
           "Adom Ali Market Road- Goaltek", "Aftabnagar", "Aga Nagar(Keraniganj)", "Agargaon", "Ahalia-Uttara",
           "Ahmed Nagar", "Ainusbag", "Ainusbag-Dakshinkhan", "Ajiz Market", "Alatunnessa School Road South Badda",
           "Alubazar (Puran Dhaka)", "Apollo", "Arambag (Mirpur)", "Arambag (Motijheel)", "Armanitola (Puran Dhaka)",
           "Arshinagar (Keraniganj)", "Asad Avenue(Dhaka)", "Ashkona", "Ashulia", "Atipara", "Auchpara (Tongi)",
           "Azampur (East) (Dakshinkhan)", "Azampur (West) (Uttara)", "Azimpur(Dhaka)", "Aziz Palli",
           "Babli Masjid (Mohakhali)", "Babubazar (Puran Dhaka)", "Badam Toli (Babubazar)", "Badekomelosshor (Tongi)",
           "Badsha mia road (Demra)", "Baigertek", "Baily Road (Dhaka)", "Baipayl", "Bakshibazar (Puran Dhaka)",
           "Balughat", "Bamnartek", "Bamuail (Demra)", "Banani block a", "Banani block b", "Banani block c",
           "Banani block d", "Banani block e", "Banani block f", "Banani block g", "Banani block h", "Banani block i",
           "Banani block j", "Banani block k", "Banani block l", "Banani DOHS", "Banasree Block - A (Dhaka)",
           "Banasree Block - B (Dhaka)", "Banasree Block - C (Dhaka)", "Banasree Block - D (Dhaka)", 
           "Banasree Block - E (Dhaka)", "Banasree Block - F (Dhaka)", "Banasree Block - G (Dhaka)",
           "Banasree Block - H (Dhaka)", "Banasree Block - I (Dhaka)", "Banasree Block - J (Dhaka)",
           "Banasree Block - K (Dhaka)", "Banasree Block - L (Dhaka)", "Banasree Block - M (Dhaka)",
           "Banasree Block - N (Dhaka)", "Banasree(Dhaka)", "Bangla Bazar (Puran Dhaka)", "Banglamotor(Dhaka)",
           "Baridhara diplomatic zone", "Baridhara DOHS", "Baridhara j block", "Baridhara k block", "Barontek",
           "Barua", "Bashabo(Dhaka)", "Basher pull (Demra)", "Bashtola", "Bashundhara R/A (Kuril)", "Bawaila Para",
           "Bawnia", "Bazar Gate Niketon", "Bazar Road - Balughat", "Bazar Road - Manikdi", "BDR Market-House Building",
           "BDR Market-Sector 6", "Benaroshi Polli", "Beribadh - Kallyanpur", "Bhadam (Tongi)", "Bhatuliya",
           "Bijoy Shoroni(Dhaka)", "Bijoynagar (Paltan)", "Birulia", "BNP Bazar", "Board Bazar", "Boardbazar",
           "Boat Ghat Road Nurerchala", "Boddhovumi(Mohammadpur)", "Bongo Bazar(Puran Dhaka)", "Bongo Bondhu Avenue (Puran Dhaka)",
           "Bongshal (Puran Dhaka)", "Bonomala (Tongi)", "Boro Bari (Tongi)", "Boro Dewra (Tongi)",
           "Boro Dewra Dakkhin Para (Tongi)", "Borobari (Tongi)", "Boroitola Bazar Khilbarir Tek", "Bosila(Dhaka)",
           "Bou Bazar - Mohakhali, Dhaka", "Boxnagar (Demra)", "BRTA", "Buddhijibi Road (Kallyanpur)", 
           "Buddho Mondir(Dhaka)", "Central Road(Dhanmodi)", "Chad Uddan(Mohammadpur)", "Chairman Bari Banani",
           "Chalabon", "Chamelibag (Dhaka)", "Chamur Khan", "Chankarpul(Puran Dhaka)", "Chawkbazar (Puran Dhaka)",
           "Chayabithi Gate- Aminbazar Savar", "Chayabithi Gate- Aminbazar Savar", "Cherag Ali (Tongi)", 
           "Choidana (Tongi)", "Chuti Ghor Road- Khilkhet", "College Gate (Tongi)", "Confidence Tower, Jhilpar",
           "CWH", "Dainik Bangla Mor(Paltan)", "Dakhinkhan Mollapara", "Dakshinkhan", "Darussalam (Kallyanpur)",
           "Dattapara Road (Tongi)", "Deger Chala (Tongi)", "Demra (Dhaka)", "Demra bazar (Demra)", "Dewan City",
           "Dhaka Medical College", "Dhaka uddan(Mohammadpur)", "Dhaka Uddyan(Mohammadpur)", "Dhaka University",
           "Dhakeshwari(Dhaka)", "Dhamrai", "Dhanmondi - Rd 1", "Dhanmondi - Rd 10", "Dhanmondi - Rd 12",
           "Dhanmondi - Rd 12A", "Dhanmondi - Rd 15", "Dhanmondi - Rd 15 A", "Dhanmondi - Rd 2", "Dhanmondi - Rd 27",
           "Dhanmondi - Rd 28", "Dhanmondi - Rd 29", "Dhanmondi - Rd 3A", "Dhanmondi - Rd 4", "Dhanmondi - Rd 4A",
           "Dhanmondi - Rd 6", "Dhanmondi - Rd 6", "Dhanmondi - Rd 6A", "Dhanmondi - Rd 8", "Dhanmondi - Rd 8A",
           "Dhanmondi - Rd 9", "Dhanmondi - Rd 9A", "Dhanmondi Staff Quarter", "Dhanmondi-Road-3", "Dhirasrom (Tongi)",
           "Dholaikhal (Puran Dhaka)", "Dholaipar(Puran Dhaka)", "Dholpur(Jatrabari)", "Dhour (Uttara )", "Diabari",
           "DIT Project Badda South Baridhara", "Dohar(Dhaka)", "Dokshingaon", "Dolaikhal (Puran Dhaka)", 
           "Donia(Dhaka)", "Doyagonj (Jatrabari)", "Duaripara", "Eastern Housing (Mohammadpur)", 
           "Eastern Housing (Pallabi)", "ECB Chattar", "Elephant Road(Dhaka)", "Ershadnagar (Tongi)", 
           "Eskaton Garden Road(Dhaka)", "Eskaton(Dhaka)", "Fakirapul (Dhaka)", "Farashgong (Puran Dhaka)", 
           "Faridabad (Jatrabari)", "Farmgate(Dhaka)", "Fayedabad", "Fuji Trade Center", "Gabtoli ( Kallyanpur)",
           "Gacha", "Gandaria (Puran Dhaka)", "Garden City(Mohammadpur)", "Gawair", "Gazipura(Tongi Hub)",
           "Golapbag (Dhaka)", "Goljarbag(Keraniganj)", "Goltek", "Gopalpur (Gazipur)(Tongi hub)", "Gopibag (Dhaka)",
           "Goran(Dhaka)", "Govt Secondary School Road Rupnagor", "Green Road(Dhaka)", "Gudaraghat (Badda)",
           "Gulbagh(Dhaka)", "Gulistan(Dhaka)", "Gulshan 1 DNCC Market", "Gulshan 1 Police plaza", "Gulshan 1 rd 1",
           "Gulshan 1 rd 10", "Gulshan 1 rd 11", "Gulshan 1 rd 12", "Gulshan 1 rd 123", "Gulshan 1 rd 124", 
           "Gulshan 1 rd 125", "Gulshan 1 rd 126", "Gulshan 1 rd 127", "Gulshan 1 rd 128", "Gulshan 1 rd 129",
           "Gulshan 1 rd 13", "Gulshan 1 rd 130", "Gulshan 1 rd 131", "Gulshan 1 rd 132", "Gulshan 1 rd 133",
           "Gulshan 1 rd 134", "Gulshan 1 rd 135", "Gulshan 1 rd 136", "Gulshan 1 rd 137", "Gulshan 1 rd 138",
           "Gulshan 1 rd 139", "Gulshan 1 rd 14", "Gulshan 1 rd 140", "Gulshan 1 rd 141", "Gulshan 1 rd 142",
           "Gulshan 1 rd 143", "Gulshan 1 rd 144", "Gulshan 1 rd 15", "Gulshan 1 rd 16", "Gulshan 1 rd 17",
           "Gulshan 1 rd 18", "Gulshan 1 rd 19", "Gulshan 1 rd 2", "Gulshan 1 rd 20", "Gulshan 1 rd 21",
           "Gulshan 1 rd 22", "Gulshan 1 rd 23", "Gulshan 1 rd 24", "Gulshan 1 rd 25", "Gulshan 1 rd 26",
           "Gulshan 1 rd 27", "Gulshan 1 rd 28", "Gulshan 1 rd 29", "Gulshan 1 rd 3", "Gulshan 1 rd 30",
           "Gulshan 1 rd 31", "Gulshan 1 rd 32", "Gulshan 1 rd 4", "Gulshan 1 rd 5", "Gulshan 1 rd 6",
           "Gulshan 1 rd 7", "Gulshan 1 rd 8", "Gulshan 1 rd 9", "Gulshan 2 DNCC Market", "Gulshan 2 rd 100",
           "Gulshan 2 rd 101", "Gulshan 2 rd 102", "Gulshan 2 rd 103", "Gulshan 2 rd 104", "Gulshan 2 rd 105",
           "Gulshan 2 rd 106", "Gulshan 2 rd 107", "Gulshan 2 rd 108", "Gulshan 2 rd 109", "Gulshan 2 rd 110",
           "Gulshan 2 rd 111", "Gulshan 2 rd 112", "Gulshan 2 rd 113", "Gulshan 2 rd 114", "Gulshan 2 rd 115",
           "Gulshan 2 rd 116", "Gulshan 2 rd 117", "Gulshan 2 rd 118", "Gulshan 2 rd 119", "Gulshan 2 rd 120",
           "Gulshan 2 rd 121", "Gulshan 2 rd 122", "Gulshan 2 rd 33", "Gulshan 2 rd 34", "Gulshan 2 rd 35",
           "Gulshan 2 rd 36", "Gulshan 2 rd 37", "Gulshan 2 rd 38", "Gulshan 2 rd 39", "Gulshan 2 rd 40",
           "Gulshan 2 rd 41", "Gulshan 2 rd 42", "Gulshan 2 rd 43", "Gulshan 2 rd 44", "Gulshan 2 rd 45",
           "Gulshan 2 rd 46", "Gulshan 2 rd 47", "Gulshan 2 rd 48", "Gulshan 2 rd 49", "Gulshan 2 rd 50",
           "Gulshan 2 rd 51", "Gulshan 2 rd 52", "Gulshan 2 rd 53", "Gulshan 2 rd 54", "Gulshan 2 rd 55",
           "Gulshan 2 rd 56", "Gulshan 2 rd 57", "Gulshan 2 rd 58", "Gulshan 2 rd 59", "Gulshan 2 rd 60",
           "Gulshan 2 rd 61", "Gulshan 2 rd 62", "Gulshan 2 rd 63", "Gulshan 2 rd 64", "Gulshan 2 rd 65",
           "Gulshan 2 rd 66", "Gulshan 2 rd 67", "Gulshan 2 rd 68", "Gulshan 2 rd 69", "Gulshan 2 rd 70",
           "Gulshan 2 rd 71", "Gulshan 2 rd 72", "Gulshan 2 rd 73", "Gulshan 2 rd 74", "Gulshan 2 rd 75",
           "Gulshan 2 rd 76", "Gulshan 2 rd 77", "Gulshan 2 rd 78", "Gulshan 2 rd 79", "Gulshan 2 rd 80",
           "Gulshan 2 rd 81", "Gulshan 2 rd 82", "Gulshan 2 rd 83", "Gulshan 2 rd 84", "Gulshan 2 rd 85",
           "Gulshan 2 rd 86", "Gulshan 2 rd 87", "Gulshan 2 rd 88", "Gulshan 2 rd 89", "Gulshan 2 rd 90",
           "Gulshan 2 rd 91", "Gulshan 2 rd 92", "Gulshan 2 rd 93", "Gulshan 2 rd 94", "Gulshan 2 rd 95",
           "Gulshan 2 rd 96", "Gulshan 2 rd 97", "Gulshan 2 rd 98", "Gulshan 2 rd 99", "Habib Market-Uttara",
           "Hajinogar (Demra)", "Hajipara (Rampura)", "Hajipara-Dakshinkhan", "Hariken (Tongi)",
           "Hasnabad(Keraniganj)", "Haterrjheel(Dhaka)", "Hatirjheel(Dhaka)", "Hatirpool(Dhaka)", "Hazaribag(Dhaka)",
           "Helal Market", "High Court (Dhaka)", "Hope School Road Pallabi", "Hossain Market (Tongi)", 
           "Ibrahimpur", "ICDDRB Mohakhali", "Imamgonj (Puran Dhaka)", "Indira Road(Firmgate)", "Islambag (Puran Dhaka)",
           "Islampur(Puran Dhaka)", "Ismailkholla", "Jahangir Gate", "Jahurul Islam Avenue", "Jatrabari(Dhaka)",
           "Jhigatola(Dhanmondi)", "Jigatola(Dhanmondi)", "Joar Shahara", "Jogonnathpur", "Johura Market",
           "Joy Bangla Road Tongi", "Joydebpur (Tongi)", "Joynal Market", "Jurain(Dhaka)", "Kachkura",
           "Kaderabad Housing(Mohammadpur)", "Kafrul", "Kakrail (Dhaka)", "Kalabagan(Dhaka)", "Kalachandpur",
           "Kalatia(Keraniganj)", "Kaliganj (Keraniganj)", "Kallyanpur", "Kalshi", "Kaltabazar (Puran Dhaka)",
           "Kamalapur(Dhaka)", "Kamarjuri (Tongi)", "Kamarpara", "Kamrangichar(Dhaka)", "Kaptan Bazar (Puran Dhaka)",
           "Katabon(Dhaka)", "Katasur(Mohammadpur)", "Kathalbagan(Dhaka)", "Katherpol (Puran Dhaka)",
           "Kathuria(Keraniganj)", "Kawla", "Kawran Bazar(Dhaka)", "Kazi Furi Road", "Kazi Nazrul Islam Avenue(Dhaka)",
           "Kazipara (Kallyanpur)", "Kellar Mor(Lalbagh-Dhaka)", "Keranigonj(Dhaka)", "Khalek Gas Station Road- Kallyanpur",
           "Khartail (Tongi)", "Khilgaon(Dhaka)", "Khilkhet", "Kochukhet", "Kodomtoli Thana (Jatrabari)",
           "Kodomtoli(Keraniganj)", "Konapara (Demra)", "Korail - Mohakhali", "Kosaibari (Dakshinkhan)",
           "Kotbari (Dakshinkhan)", "Kotwali (Puran Dhaka)", "Kunia (Tongi)", "Kunipara (Mohakhali)",
           "Kuratuli", "Kuril", "Kurmitola", "Lalbagh(Dhaka)", "Lalkuthi (Kallyanpur)", "Lalmatia(Dhaka)",
           "Love Road (Mohakhali)", "Luxmi Bazar (Puran Dhaka)", "M.E.S", "Madani Avenue", "Madartek(Dhaka)",
           "Madina nagar", "Mahanogor(Dhaka)", "Mahut Tuli (Puran Dhaka)", "Majukhan (Tongi)", "Malibag(Dhaka)",
           "Malibagh Taltola(Dhaka)", "Manda(Dhaka)", "Manik Mia Avenue(Dhaka)", "Manik Nagar (Dhaka)",
           "Manikdi", "Masterpara", "Mastertek", "Matikata", "Matuail (Jatrabari)", "Mazar Road (Kallyanpur)",
           "Mazar Road Uttarkhan", "Megh Dubi Tongi", "Meradia(Dhaka)", "Meradiya Bazar(Dhaka)", "Merul Badda",
           "Middle Badda", "Middle Bashabo(Dhaka)", "Milgate (Tongi)", "Minto Road(Dhaka)", "Mirbagh(Dhaka)",
           "Mirhazirbagh(Jatrabari)", "Mirpur - 11", "Mirpur - 11.5", "Mirpur - 12", "Mirpur - 13", "Mirpur - 14",
           "Mirpur - 15", "Mirpur - 6", "Mirpur - 7", "Mirpur 1 (Kallyanpur)", "Mirpur 10", "Mirpur 13 /14 / 15",
           "Mirpur 2 (Kallyanpur )", "Mirpur Diabari", "Mirpur DOHS", "Mirpur Taltola (Kallyanpur)", "Mitford (Puran Dhaka)",
           "Modhubagh(Dhaka)", "Moghbazar(Dhaka)", "Mohakhali", "Mohakhali DOHS", "Mohakhali Wireless gate",
           "Mohammadia Housing(Mohammadpur)", "Moinartek", "Mollartek", "Mondir-Mirpur", "Monipur (60 feet)",
           "Monipuripara(Farmgate)", "Morkun (Tongi)", "Motijheel(Dhaka)", "Mouchak (Malibagh)", "Mughdapara (Dhaka)",
           "Mukti Clinic(Nawabganj)", "Munda(Dhaka)", "Muslimnagar (Demra)", "Nadda", "Naddapara (Dakshinkhan Hub )",
           "Nakhalpara (Mohakhali)", "Nalbhog", "Namapara-Khilkhet", "Nandipara(Dhaka)", "Narinda (Puran Dhaka)",
           "National University", "Nawabpur (Puran Dhaka)", "Naya Bazar (Puran Dhaka)", "Naya Paltan (Dhaka)",
           "Nayabazar (Dhaka)", "Nazarganj(Keraniganj)", "Nazimuddin Road (Malibag)", "Nazimuddin Road (Puran Dhaka)",
           "Nazira Bazar (Puran Dhaka)", "Nazirabag(Keraniganj)", "New Market(Dhaka)", "Nijhum gate", "Niketon",
           "Nikunja", "Nikunja 2", "Nilkhet(Dhaka)", "Nimtola Badda", "No area", "Nobodoy(Mohammadpur)",
           "North Badda", "Notun Bazar (Badda)", "Nurer Chala", "Nurjahan Road(Mohammadpur)", "Old Elephant Road(Dhaka)",
           "Oxygen", "Paikpara (Kallyanpur)", "Pakuria-Uttara", "Palashi(Dhaka)", "Palasnagor", "Pallabi",
           "Panthopath(Dhaka)", "Paribag(Dhaka)", "Pastola Bazar (Merul Badda)", "Pathorghata(Barguna)",
           "Patuatuly (Puran Dhaka)", "Phulbaria", "Pilkhana(Dhaka)", "Pink City Model Town (Kuril )",
           "Pirerbag", "Polashi(Dhaka)", "Poschim Badda", "Postogola(Dhaka)", "Prembagan", "Press Club (Dhaka)",
           "Purana Paltan (Dhaka)", "Purbo Badda", "Purbo Rampura(Dhaka)", "Purobi", "Railway Colony (Puran Dhaka)",
           "Rainkhola", "Rajar Dewri (Puran Dhaka)", "Rajarbag (Dhaka)", "Rajia Sultana Road(Mohammadpur)",
           "Ramna(Dhaka)", "Rampura TV center(Dhaka)", "Rampura(Dhaka)", "Ranavola", "Rani mohol (Demra)",
           "Rayer Bazar(Mohammadpur)", "RayerBag(Dhaka)", "Razabazar(Farmgate)", "Ring Road(Shymoli)", 
           "Rosulbagh(Mohakhali)", "Rupnagar Residential Area", "Sabujbag(Dhaka)", "Sadarghat (Dhaka)",
           "Sadek Khan Road(Mohammadpur)", "Sahid Siddque Road- Gacha", "Saifuddin Sarkar Academy Road Tongi",
           "Salimullah Road(Mohammadpur)", "Sarwar Avenue- Dakshinkhan", "Sat rowja (Puran Dhaka)", "Sataish (Tongi)",
           "Satarkul Uttor Badda", "Satmoshjid Road(Dhaka)", "Satrasta (Mohakhali)", "Sat-tola Bazar Mohakhali",
           "Saudi Colony Cantonment", "Savar", "Savar Cantonment", "Sayedabad(Dhaka)", "Science Lab(Dhaka)",
           "SDA", "Senpara", "Shadinota Sharani Uttor Badda", "Shagufta", "Shah Ali Bag", "Shahajadpur Badda",
           "Shahbag(Dhaka)", "Shaheed Ramiz Uddin Gate- MES", "Shaheed Ramiz Uddin Gate- MES", "Shaheed Sharani",
           "Shaheenbagh (Mohakhali)", "Shahidnagar (Lalbagh- Dhaka)", "Shahjahanpur(Dhaka)", "Shahjahanpur(Dhaka)",
           "Shakhari Bazar (Puran Dhaka)", "Shankar(Dhanmondi)", "Shantibag (Dhaka)", "Shantinagar (Dhaka)",
           "Sharuliya (Demra)", "Shegunbagicha (Dhaka)", "Shekhertek(Mohammadpur)", "Sher e Bangla Road(Mohammadpur)",
           "Sher-E-Bangla Nagar(Agargaon-Dhaka)", "Shewra", "Shewrapara", "Shiddheswari (Dhaka)", "Shonir Akhra(Dhaka)",
           "Shukrabad(Dhanmondi)", "Shwamibag(Dhaka)", "Shyamoli(Dhaka)", "Shyampur(Jatrabari)", 
           "Siddique Bazar (Puran Dhaka)", "Shiddheswari (Dhaka)", "Shonir Akhra(Dhaka)", "Shukrabad(Dhanmondi)", "Shwamibag(Dhaka)", 
           "Shyamoli(Dhaka)", "Shyampur(Jatrabari)", "Siddique Bazar (Puran Dhaka)", "Siddweswari (Dhaka)", 
           "Signboard(Tongi Hub)", "Sipahibag(Dhaka)", "Sobhanbag(Dhanmondi)", "Society", "Solmaid", 
           "Sonakhola - Dakhinkhan", "Sonali Bank Staff Quarter", "South Badda", "South Monipur (60 feet)", 
           "Staff Road Gate - MES", "Staffquater (Demra)", "Subastu", "Sukrabad(Dhanmondi)", "Surtaranga (Tongi)", 
           "Sutrapur (Puran Dhaka)", "Tajmahal Road(Mohammadpur)", "Tallabag(Dhanmondi)", "Taltola (Agargoan)", 
           "Tantibazar (Puran Dhaka)", "Targach (Tongi)", "Tatibazar (Puran Dhaka)", "TB gate Mohakhali", 
           "Technical", "Tejkunipara(Farmgate)", "Tenari More (Dhaka)", "Teskunipara(Farmgate)", "Tikatuly (Dhaka)", 
           "Tipu Sultan Road(Puran Dhaka)", "Tolarbag", "Tongi Bazar (Dhaka)", "TT Para (Dhaka)", "Turag", 
           "Ulan road(Dhaka)", "Uttara Sector - 1", "Uttara Sector - 10", "Uttara Sector - 12", "Uttara Sector - 13", 
           "Uttara Sector - 15", "Uttara Sector - 16", "Uttara Sector - 17", "Uttara Sector - 18", "Uttara Sector - 2", 
           "Uttara Sector - 6", "Uttara Sector - 8", "Uttara Sector 11", "Uttara Sector 14", "Uttara Sector 3", 
           "Uttara Sector 5", "Uttara Sector 7", "Uttara Sector 9", "Uttara Sector-4", "Uttarkhan", "Uttor Badda", 
           "Vashantek", "Vatara", "Wari (Puran Dhaka)", "Washpur(Dhanmondi)", "Zafrabad(Mohammadpur)", 
           "Zigatola(Dhanmodi)", "Zinzira(Keraniganj)", "Zoo"
         ]