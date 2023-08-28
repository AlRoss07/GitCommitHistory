/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import axios from 'axios';
import { Commit } from 'src/commit.interface';

@Controller('commit-history')
export class CommitHistoryController {
  @Get()
  async getCommitHistory(): Promise<Commit[]> {
    try {
      const githubToken = process.env.GITHUB_TOKEN;
      if (!githubToken) {
        throw new Error("GitHub token is missing. Make sure you've set the environment variable GITHUB_TOKEN.");
      }

      const headers = {
        Authorization: `Bearer ${githubToken}`,
      };

      const owner = 'AlRoss07'; 
      const repo = 'GitCommitHistory'; 

      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/commits`,
        { headers }
      );

      if (response.status !== 200) {
        console.error('GitHub API responded with status code:', response.status);
        throw new Error('Error fetching commit history from GitHub API: Unexpected status code');
      }

      if (response.data.message === 'Git Repository is empty.') {
        throw new Error('No commits found in the repository.');
      }

    
      const commits: Commit[] = response.data;
      return commits;
    } catch (error) {
      console.error('Error fetching commit history from GitHub API:', error);
      throw new Error('Error fetching commit history from GitHub API: ' + error.message);
    }
  }
}
