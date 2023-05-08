import './App.scss';

import NotesList from '../NotesList/NotesList';
import Note from '../Note/Note';
import Form from '../Form/Form';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      timestamp: 1652347975,
      text: "Et alors c'est pas permis? Alors là! Permettez-moi de vous dire! Le coup du mystérieux chevalier gaulois solitaire à la rescousse de l’opprimé. Ca fait vraiment bidon comme légende! Allez-y mollo avec la joie! Ben c’est bien ce que j’ai dit! Provençal le Gaulois… le Galois… Ouais je vois ce que vous voulez dire…"
    },
    {
      id: 2,
      timestamp: 1652347547,
      text: "Je suis chef de guerre moi, je suis pas là pour secouer des drapeaux et jouer de la trompette. Mais parce qu’on a des frais! Vous pouvez pas vous rentrer ça dans le crâne? Vous en avez encore beaucoup du sensationnel comme ça? Ah il faut la tenter celle-là! Mais ils ont pas le droit de décider de la retraite eux-mêmes! On l’a dit et redit ça! Alors dites vous que c’est un combat réel et montrez-moi ce que vous avez dans l’slibard!"
    }
  ]);

  return (
    <div className="app">
      <NotesList notes={notes}/>
      <Note notes={notes}/>
      <Form notes={notes} setNotes={setNotes}/>
    </div>
  );
}

export default App;
