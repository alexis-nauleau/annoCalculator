import axios from "axios";
import * as cheerio from "cheerio";

export async function GET() {
    try {
        const url = "URL_DE_TON_SITE"; // Remplace par l'URL correcte
        const { data } = await axios.get(url, {
            headers: { "User-Agent": "Mozilla/5.0" }
        });

        const $ = cheerio.load(data);
        let items = [];

        // Sélection des cartes contenant les informations des objets
        $(".MuiPaper-root.MuiCard-root").each((index, element) => {
            const name = $(element).find(".MuiCardHeader-title strong").text().trim();
            const id = $(element).find(".MuiCardHeader-subheader").text().match(/ID:\s*(\d+)/)?.[1] || "N/A";
            const target = $(element).find(".MuiTypography-gutterBottom").text().replace("Targets: ", "").trim();

            // Récupération des bonus
            let bonus = {};
            $(element).find(".MuiTypography-body2.mui-4c3gvz span").each((i, span) => {
                bonus[`bonus${i + 1}`] = $(span).text().trim();
            });

            items.push({ name, id, target, bonus });
        });

        return new Response(JSON.stringify({ items }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Erreur lors du scraping" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
