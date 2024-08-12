import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { NextResponse } from 'next/server';

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

    const statisticsFile = fs.readFileSync(
        path.join(process.cwd(), 'contents', 'thong-ke.yaml'),
        'utf8'
    );

    const statisticsFileData = yaml.load(statisticsFile);

    return new NextResponse(JSON.stringify(statisticsFileData), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}