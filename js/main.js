
async function parseCV() {
  const response = await fetch('https://cvparser.ai/api/v4/parse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'f4e425f4680742a42a825480e628a981'
    },
    body: JSON.stringify({
      url: 'https://download1979.mediafire.com/605gh236prbgD5dB0vvY8lwaCBLqLw5PrzTk2Wr2_upPeqtFx5r8Y46_2S0teFwsZoCsLEJzwZsIddlMimXlsE7dUFYT8P6HYozrfbN4upvfyVs_Z8NPfR1HW_1GyFdX1SxQfa5naTGgM-PkkNpWC1SbpjWKJ949t_Iwug-qHfM/r4y1o03t81usx04/CV.pdf' 
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