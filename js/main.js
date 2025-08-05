
async function parseCV() {
  const response = await fetch('https://cvparser.ai/api/v4/parse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'f4e425f4680742a42a825480e628a981'  // استبدل YOUR_API_KEY بالمفتاح الحقيقي
    },
    body: JSON.stringify({
      url: 'https://drive.google.com/uc?export=download&id=1-M0l1eA0NIEiQmRXHZgazglqI0iaSD4q' 
    })
  });

  if (!response.ok) {
    console.error('Request failed with status:', response.status);
    const errorText = await response.text();
    console.error('Error response:', errorText);
    return;
  }

  const data = await response.json();
  console.log('Parsed CV data:', data);
}

 parseCV();