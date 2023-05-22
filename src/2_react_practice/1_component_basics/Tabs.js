import {useState} from "react";
import styled from "styled-components";


const TabContainer = styled.div`
  background-color: bisque;
  display: flex;
  justify-content: space-evenly;
`

const Tab = ({isActive = false, text}) => {

    const TabHead = styled.div`
      background-color: ${isActive ? "green" : "grey"};
    `

    const TabBody = styled.div`
      background-color: ${isActive ? "green" : "grey"};
      width: 100px;
      height: 100px;
    `

    return (
        <div>
            <div>
                <TabHead>T</TabHead>
                <TabBody>{text}</TabBody>
            </div>
        </div>
    )
}


const Tabs = () => {

    const [tabIndex, setTabIndex] = useState(1)
    const tabs = ["Tab 1", "Tab 2", "Tab 3"]

    const activateTab = (index) => {
        console.log("activateTab", index)
        setTabIndex(index)
    }

    const nextTab = () => {
        setTabIndex((tabIndex + 1) % tabs.length);
    }

    return (<>
        <button onClick={nextTab}>Click me!</button>
        <TabContainer>
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    isActive={tabIndex === index}
                    onClick={nextTab}
                    text={tab}
                />
            ))}
        </TabContainer>
    </>)
}

export default Tabs;