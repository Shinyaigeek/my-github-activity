import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

const user = process.env.GITHUB_USERNAME;

export default async (request: VercelRequest, response: VercelResponse) => {
  const { data } = await octokit.rest.search.issuesAndPullRequests({
    q: `involves:${user} -user:${user} author:${user} is:public `,
    per_page: 100,
    page: 1,
  });
  const items = data.items.map(({ html_url, title, number }) => {
    const [, , , org, repositoryName] = html_url.split("/");
    const repository = `${org}/${repositoryName}`;
    return {
      repository,
      url: html_url,
      number,
      title,
    };
  });
  response.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  response.status(200).json(items);
};
