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

    const aboutFile = fs.readFileSync(
        path.join(process.cwd(), 'contents', 've-chung-toi.yaml'),
        'utf8'
    );

    const aboutFileData = yaml.load(aboutFile);

    return new Response(JSON.stringify(aboutFileData), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}