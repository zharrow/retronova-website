// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { type, userType, formData } = req.body;

    const to =
        type === 'devis' && userType === 'professionnel'
            ? 'relation.entreprise@retronova.fr'
            : 'contact@retronova.fr';

    const uniqueId = Math.floor(Math.random() * 9e9 + 1e9); // 10 chiffres

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER || 'auto.retronova@gmail.com',
            pass: process.env.MAIL_PASS || 'jdihzxhqvixlopgo',
        },
    });

    const htmlContent = `
    <h2>Nouvelle demande ${type === 'devis' ? 'de devis' : 'de contact'} - ID ${uniqueId}</h2>
    <p><strong>Type de client :</strong> ${userType}</p>
    ${Object.entries(formData)
        .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
        .join('')}
  `;

    try {
        await transporter.sendMail({
            from: '"Retronova Bot" <auto.retronova@gmail.com>',
            to,
            subject: `Nouvelle demande ${type === 'devis' ? 'de devis' : 'de contact'} - ID ${uniqueId}`,
            html: htmlContent,
        });

        res.status(200).json({ success: true });
    } catch (error: any) {
        console.error('Erreur lors de l’envoi de l’e-mail:', error);
        res.status(500).json({ error: 'Échec de l’envoi de l’e-mail' });
    }
}
