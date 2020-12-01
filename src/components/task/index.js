import React from 'react';
import {Task, BtnEdit} from './style';

const TaskComponent = ({text}) => {
  return (
    <Task>
    	<BtnEdit className="show">
    		<i class="fas fa-pencil-alt"></i>
    	</BtnEdit>
    	{text}
    </Task>
  )
}

export default TaskComponent;