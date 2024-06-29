const ID_SPREADSHEET = 'votre_id_spreadsheet';
const NOM_DE_LA_FEUILLE = 'votre_nom_de_la_feuille';
const PLAGE_DE_DONNEES = 'A1:F200';
const CLE_API = 'votre_cle_api';

const url = `https://sheets.googleapis.com/v4/spreadsheets/${ID_SPREADSHEET}/values/${NOM_DE_LA_FEUILLE}!${PLAGE_DE_DONNEES}?key=${CLE_API}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Traitez les données récupérées ici
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
