import {excosList} from './data/excosList.js';

import {setupReadMore} from './about-exco.js'

const excosGrid = document.getElementById('executive-set-container')

export function displayExcoSet( executivesSet) {
  
  let membersHTML = '';
  
  excosList.forEach(excoSet => {
    if (excoSet.id === executivesSet){
      excoSet.members.reverse().forEach(member => {
  
        membersHTML += `
        <div class="executives-container max-w-sm p-6 bg-white/15 border border-gray-200 rounded-lg shadow-sm dark:bg-green-800/15 dark:border-gray-700">
          <div class="executive-detail-container flower bg-linear-30 from-green-500 to-green-800 animate-spin">
              <img src=${member.image} alt="20250616-210243" border="0" class="w-full h-full object-cover touch-auto overflow-auto object-top">
          </div>
          <div class="block text-sm/6 font-medium text-gray-800 dark:text-gray-400">
            Comr.
          </div>
          <div>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">${member.name}</h5>
          </div>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-300 content-container text-base">
            <span class="content-wrapper">
              <span class="content">
                <span class="text text-base">
                  <span>
                    ${member.about}
                  </span>
                  <span>
                    <span>Comr.</span>
                    <span>
                      ${member.name}
                    </span> 
                  </span> 
                  <span> , a 
                    <span > ${member.level} </span> 
                  </span> - 
                  <span>
                  Software Engineering student, serves as the 
                  </span> 
                  <span> ${member.position} </span>
                  <span> of the Association of Software Engineering Students(ASES),
                    <span>
                      Ascension Family
                    </span>
                    FUTO. 
                  </span> 
                  <span> 
                    ${member.role}. 
                  </span>
                </span>
              </span>
            </span>
            <span class="read-more-btn font-medium items-center text-green-600 hover:underlined-md cursor-pointer transition-colors duration-300 hover:bg-green-700 inline-flex text-xs/10 hidden" aria-expanded="false">
              <i class="fas fa-external-link-alt"></i>
            </span>
          </p>
          <div class="inline-flex font-medium items-center text-green-600 hover:underline text-xl">
            ${member.position}
          </div>
        </div>`
      })
    }
  })
  
  return membersHTML
}

document.addEventListener('DOMContentLoaded', () => {
  setupReadMore(excosGrid)
});