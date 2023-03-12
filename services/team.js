import puppeteer from 'puppeteer';
import { BASE_URL } from '../constants.js';

export const getAllTeams = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(BASE_URL);

  // Wait to found teams selector
  const teamsSelector = '.teams';
  await page.waitForSelector(teamsSelector);


  // Get all teams
  const teams = await page.evaluate(() => {
    const teams = [];
    document.querySelectorAll('.teams .team').forEach(team => teams.push(team.getAttribute('alt')));
    return teams;
  });

  // Print all teams
  console.log(teams);

  await browser.close();
}