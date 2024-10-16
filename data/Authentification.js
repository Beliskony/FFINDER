const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Simuler une base de données avec un tableau
const users = [];

// Fonction pour vérifier si un email existe déjà
const emailExists = (email) => {
  return users.some(user => user.email === email);
};

// Route d'inscription
app.post('/signup', async (req, res) => {
  try {
    const { nom, email, motDePasse } = req.body;

    // Vérifier si l'utilisateur existe déjà
    if (emailExists(email)) {
      return res.status(400).json({ message: "Cet email est déjà utilisé" });
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(motDePasse, 10);

    // Créer un nouvel utilisateur
    const newUser = {
      id: users.length + 1,
      nom,
      email,
      motDePasse: hashedPassword
    };

    // Ajouter l'utilisateur à notre "base de données"
    users.push(newUser);

    res.status(201).json({ message: "Inscription réussie", userId: newUser.id });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'inscription" });
  }
});

// Route de connexion
app.post('/login', async (req, res) => {
  try {
    const { email, motDePasse } = req.body;

    // Trouver l'utilisateur
    const user = users.find(u => u.email === email);

    if (!user) {
      return res.status(400).json({ message: "Email ou mot de passe incorrect" });
    }

    // Vérifier le mot de passe
    const validPassword = await bcrypt.compare(motDePasse, user.motDePasse);

    if (!validPassword) {
      return res.status(400).json({ message: "Email ou mot de passe incorrect" });
    }

    res.json({ message: "Connexion réussie", userId: user.id });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la connexion" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));