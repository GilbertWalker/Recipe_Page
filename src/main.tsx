import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RecipeCard from './components/RecipeCard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecipeCard/>
  </StrictMode>,
)
