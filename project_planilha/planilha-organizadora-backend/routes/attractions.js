const express = require('express');
const router = express.Router();

// Exemplo de lista de atrações com altura associada
const attractions = [
    { name: 'Montanha Russa A', minHeight: 150, description: 'Uma montanha russa emocionante!' },
    { name: 'Roda Gigante', minHeight: 120, description: 'Visão panorâmica de 360°' },
    { name: 'Escorregador de Água', minHeight: 100, description: 'Diversão molhada para todos!' },
    { name: 'Carrossel', minHeight: 90, description: 'Atração clássica para a família.' },
    { name: 'Túnel do Terror', minHeight: 160, description: 'Atração assustadora!' },
];

// Rota para filtrar atrações com base na altura fornecida
router.post('/filter', (req, res) => {
    const { height } = req.body; // Recebe a altura fornecida pelo usuário

    if (!height) {
        return res.status(400).json({ message: 'Altura é obrigatória.' });
    }

    // Filtra as atrações que têm altura mínima compatível com a fornecida
    const filteredAttractions = attractions.filter(attraction => attraction.minHeight <= height);

    if (filteredAttractions.length === 0) {
        return res.status(404).json({ message: 'Nenhuma atração disponível para essa altura.' });
    }

    return res.status(200).json(filteredAttractions);
});

module.exports = router;
