import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export async function GET(request: Request) {
    const internalHeader = request.headers.get('X-Internal-Request');

    if (internalHeader !== 'true') {
        return new Response(JSON.stringify({ error: 'Forbidden' }), {
            status: 403,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    const contactFile = fs.readFileSync(
        path.join(process.cwd(), 'contents', 'lien-he.yaml'),
        'utf8'
    );

    const contactFileData = yaml.load(contactFile);

    return new Response(JSON.stringify(contactFileData), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}