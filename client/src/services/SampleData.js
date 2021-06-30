import Digital from "../images/digital.jpg"
import Desk from "../images/desk.jpg";
import Modern from "../images/modern.jpg";
import Tree from "../images/tree.png";
import Audio from "../images/audio.jpg";
import Minimal from "../images/minimal.jpg";
import Wildcard from "../images/wildcard.jpg";
import Outdoor from "../images/outdoors.jpg";
import Indoor from "../images/indoors.jpg";
import SubmitImg from "../images/submitForm.png"
import Web from "../images/web.png"
import ProfileImg from "../images/Profile.png"
import GalleryImg from "../images/gallery.png"
import ForumImg from "../images/forum.png"

export const AddDesignImg = SubmitImg;
export const DefaultImg = Wildcard;

export const roadmapSteps = [
    { header: "Explore", desc: "Get inspired by a diverse set of designs in the Gallery",  link: '/Gallery', image: GalleryImg},
    { header: "Join the Community", desc: "Create an account to save your favorite designs and even share your own", link: '/Login', image: ProfileImg },
    { header: "Talk to Others", desc: "Discuss interesting designs on the Forums to see what others are thinking",  link: '/Forum', image: ForumImg },
];

export const TeamMembers = [
    { name: "Dee Signer", role: "UI/UX Designer" },
    { name: "Ray Act", role: "Frontend Developer" },
    { name: "Dan Mongo", role: "Database Engineer" },
    { name: "Noda Esper", role: "Backend Engineer" },
];

export const Categories = [
    {name: 'Indoor', image: Indoor},
    {name: 'Outdoor', image: Outdoor},
    {name: 'Web', image: Web},
    {name: 'Minimal', image: Minimal},
    {name: 'Digital', image: Digital},
    {name: 'Wildcard', image: Wildcard},
  ]

  export const CardImages = [
    {name: 'Indoor', image: Desk},
    {name: 'Outdoor', image: Tree},
    {name: 'Digital', image: Digital},
    {name: 'Minimal', image: Minimal},
    {name: 'Web', image: Web},
    {name: 'Audio', image: Audio},
    {name: 'Wildcard', image: Modern},
  ]

export const FeatureSample = [
    {
        title: "Tree Wall",
        creator: "Maple54",
        description: "Give your tree some stylish protection",
        img: Tree,
        id: 1,
        category: "Outdoor",
        expertAnalysis: 
            {
            Tim:" TREE WALL Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Sara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Peter:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Sophia:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?"   
        }
    },
    {
        title: "Simple Desk",
        creator: "IndoorDezign",
        description: "Keep your desk simple. Have a clear mind",
        category: "Indoor",
        img: Desk,
        expertAnalysis: 
            {
            Tim:" SIMPLE DESK Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Sara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Peter:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Sophia:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?"   
        }
    },
    {
        title: "Connections",
        creator: "Modo Green",
        description: "Connect the Dots",
        category: "Wildcard",
        img: Modern,
        expertAnalysis: 
            {
            Tim:" CONNECTIONS Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Sara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Peter:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Sophia:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?"   
        }
    },
    {
        title: "Exquisite Shapes",
        creator: "Bluesky87",
        description: "Notice the geometry",
        category: "Digital",
        img: Digital,
        expertAnalysis: 
            {
            Tim:" EXQUISITE SHAPES Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Sara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Peter:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Sophia:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?"   
        }
    },
    {
        title: "Minimal",
        creator: "Simple1",
        description: "Block out the distractions. Minimalism.",
        category: "Minimal",
        img: Minimal,
        expertAnalysis: 
            {
            Tim:" Minimal Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Sara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Peter:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Sophia:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?"   
        }
    },
    {
        title: "Listening",
        creator: "AudioGuy",
        description: "Listen to the currents",
        category: "Audio",
        img: Audio,
        expertAnalysis: 
            {
            Tim:" LISTENING Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Sara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Peter:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?", 
            Sophia:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam asperiores reiciendis adipisci delectus amet omnis minima nesciunt ducimus quos?"   
        }
    }
];

export const SampleData = [
    {
        id: 1,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Digital",
        img: Digital,
    },
    {
        id: 2,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Digital",
        img: Digital,
    },
    {
        id: 3,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Digital",
        img: Digital,
    },
    {
        id: 4,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Digital",
        img: Digital,
    },
    {
        id: 5,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Digital",
        img: Digital,
    },
    {
        id: 6,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Digital",
        img: Digital,
    },
    {
        id: 7,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Indoor",
        img: Digital,
    },
    {
        id: 8,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Indoor",
        img: Digital,
    },
    {
        id: 9,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Indoor",
        img: Digital,
    },
    {
        id: 10,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Indoor",
        img: Digital,
    },
    {
        id: 11,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Indoor",
        img: Digital,
    },
    {
        id: 12,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Indoor",
        img: Digital,
    },
    {
        id: 13,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Outdoor",
        img: Digital,
    },
    {
        id: 14,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Outdoor",
        img: Digital,
    },
    {
        id: 15,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Outdoor",
        img: Digital,
    },
    {
        id: 16,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Outdoor",
        img: Digital,
    },
    {
        id: 17,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Outdoor",
        img: Digital,
    },
    {
        id: 18,
        title: "Static Sample Data",
        creator: "Database not connected",
        category: "Outdoor",
        img: Digital,
    },
];

