import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { saveUrl } from '../utils/urlStorage';
import { v4 as uuidv4 } from 'uuid';

function ShortenerPage() {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [shortcode, setShortcode] = useState("");

  const handleSubmit = () => {
    if (!url.startsWith("http")) {
      alert("Enter a valid URL.");
      return;
    }
    const code = shortcode || uuidv4().slice(0, 6);
    saveUrl(code, {
      originalUrl: url,
      validity: validity ? parseInt(validity) : 30,
      createdAt: Date.now(),
    });
    alert(`Shortened: http://localhost:3000/${code}`);
    setUrl("");
    setValidity("");
    setShortcode("");
  };

  return (
    <Box p={2}>
      <Typography variant="h5">URL Shortener</Typography>
      <TextField label="Long URL" fullWidth margin="normal" value={url} onChange={e => setUrl(e.target.value)} />
      <TextField label="Validity (minutes)" fullWidth margin="normal" value={validity} onChange={e => setValidity(e.target.value)} />
      <TextField label="Custom shortcode (optional)" fullWidth margin="normal" value={shortcode} onChange={e => setShortcode(e.target.value)} />
      <Button variant="contained" onClick={handleSubmit}>Shorten</Button>
    </Box>
  );
}

export default ShortenerPage;