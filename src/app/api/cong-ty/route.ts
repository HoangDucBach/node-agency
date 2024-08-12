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

    const companyFile = fs.readFileSync(
        path.join(process.cwd(), 'contents', 'cong-ty.yaml'),
        'utf8'
    );

    const companyFileData = yaml.load(companyFile);

    return new Response(JSON.stringify(companyFileData), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}