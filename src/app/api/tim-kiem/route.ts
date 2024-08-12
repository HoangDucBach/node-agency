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

    const documentsFile = fs.readFileSync(
        path.join(process.cwd(), 'contents', 'tim-kiem.yaml'),
        'utf8'
    );

    const documentsFileData = yaml.load(documentsFile);

    return new Response(JSON.stringify(documentsFileData), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}