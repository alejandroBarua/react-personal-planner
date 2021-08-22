import { v4 } from "uuid";

const tasksList = [ 
  {
    name: "sleep",
    color: "#1292d1"
  },
  {
    name: "work",
    color:"#f89b31"
  },
  {
    name: "free",
    color:"#a45bb4"
  },
  {
    name: "study",
    color:"#f9ea2c"
  }
];

const inizializeTasksList = () => tasksList.map(task => {return {id: v4(), ...task}});

export default inizializeTasksList;