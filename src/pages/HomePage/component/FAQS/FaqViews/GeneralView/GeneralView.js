import React from 'react'
import Collapsible from "react-collapsible";
import './GeneralView.css'

const GeneralView = (props) => {
    return (
      <Collapsible
      tabIndex={props.index}
        trigger="Start here"
        classParentString="main-collapse lg:mb-0 mb-5"
        openedClassName="open"
        contentInnerClassName='content'

      >
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>
    );
}

export default GeneralView
