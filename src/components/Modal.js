import styled from "styled-components";

const RunnerSection = styled.section`
z-index: 1;
width: 100%;
height: 100vh;
background-color: rgba(0, 0, 0, 0.753);
position: fixed;
top: 0;
left: 0;

div{
    max-width: 500px;
    margin: 5rem auto 0 auto;
    background: white;
    text-align: center;
    h2{
        padding-top: 2rem;
    width: 100%;
    text-align: center;
}
button{
    width: 40%;
    padding: 1rem;
    color: white;
    background: black;
    margin: 1rem auto 1rem auto;
    border: 0;
    cursor: pointer;
}


li{
    display: flex;
    flex-direction: row;
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
    padding: 0;
    max-width: 100%;
    max-height: calc(100vh - 210px);
    overflow-y: auto;
       :nth-child(even){
           background: lightblue;
       }
    p{
        width: 100%;
        padding: 0;
    } 
}
`;

export const Modal = ({modalData, setModal}) => {
    const closeModal = () => {
        setModal(false)
    }
    return(
        <RunnerSection>
            <div>
            <h2>Statistikk for {modalData[0].runner[0].person.name}</h2>
            
            {modalData.map((item)=> (
              <li key={item.runner[0].uuid}>
                <p>Sted: {item.place}</p>
                <p>Plass: {item.runner[0].rank}</p>
                {item.runner[0].timeDifference > 0 ? <p>Bak: {item.runner[0].timeDifference}</p> : null}
                <p>Tid: {item.runner[0].duration}</p>
              </li>
          ))}
          <button type="button" onClick={closeModal}>Lukk</button>
          </div>
        </RunnerSection>
    )
}