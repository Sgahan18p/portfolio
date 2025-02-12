const { Client } = require('@notionhq/client');

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' });
  }

  try {
    const { name, email, subject, message } = JSON.parse(req.body);

    // Create a new page in the Notion database
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name || 'No Name Provided',
              },
            },
          ],
        },
        Email: {
          email: email || 'No Email Provided',
        },
        Subject: {
          rich_text: [
            {
              text: {
                content: subject || 'No Subject Provided',
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message || 'No Message Provided',
              },
            },
          ],
        },
      },
    });

    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    console.error('Error creating page:', error);
    res.status(500).json({ msg: 'Failed', error: error.message });
  }
};
