import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllCountries.css"; 

export default function Records(props) {
  const [records, setRecords] = useState(null);
  useEffect(() => {
    // when you compolete DB bulding and crete APIs (backEnd) replace setRecords with new data from fetching API
    setRecords(props.records);

//     axios
//       .get("")
//       .then((res) => {
//         setRecords(res.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
  }, [props]);

  return (
  <div>

{
    records &&  records.map(ele=>{
return(
<>
<div>
 *** {ele.ID}
</div>
<div>
*** {ele.Country}

</div>
<div>
*** {ele.Date}

</div>
<div>
*** {ele.TotalConfirmed} 

</div>
<br></br>
</>
   
)
     })
}
  </div>
  );
}
