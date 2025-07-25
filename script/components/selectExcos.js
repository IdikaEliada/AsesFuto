import {excosList} from '../sections/executives/data/excosList.js';

let selectionBoxHTML = '';

export function renderList(){
  excosList.forEach((excoSet) => {
  selectionBoxHTML += `
    <li class="relative cursor-default py-2 pr-9 pl-3 select-none" id="listbox-option-${excoSet.id}" role="option">
      <div class="flex items-center">
        <span class="ml-3 block truncate font-normal">
          ${excoSet.name}
        </span>
      </div>
      
      <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-green-800 dark:text-green-500" data-selected-set-checked = ${excoSet.id} id="check-${excoSet.id}">
        
      </span>
    </li>`
    
  })
  
  return selectionBoxHTML;
}
