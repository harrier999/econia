
import { AptosParserRepo } from "@manahippo/move-to-ts";
import * as Account from './account';
import * as Account_utils from './account_utils';
import * as Aptos_coin from './aptos_coin';
import * as Aptos_governance from './aptos_governance';
import * as Block from './block';
import * as Bucket_table from './bucket_table';
import * as Chain_id from './chain_id';
import * as Code from './code';
import * as Coin from './coin';
import * as Consensus_config from './consensus_config';
import * as Genesis from './genesis';
import * as Governance_proposal from './governance_proposal';
import * as Managed_coin from './managed_coin';
import * as Reconfiguration from './reconfiguration';
import * as Resource_account from './resource_account';
import * as Stake from './stake';
import * as System_addresses from './system_addresses';
import * as Timestamp from './timestamp';
import * as Token from './token';
import * as Token_transfers from './token_transfers';
import * as Transaction_context from './transaction_context';
import * as Transaction_fee from './transaction_fee';
import * as Transaction_publishing_option from './transaction_publishing_option';
import * as Validator_set_script from './validator_set_script';
import * as Version from './version';
import * as Vm_config from './vm_config';
import * as Voting from './voting';

export * as Account from './account';
export * as Account_utils from './account_utils';
export * as Aptos_coin from './aptos_coin';
export * as Aptos_governance from './aptos_governance';
export * as Block from './block';
export * as Bucket_table from './bucket_table';
export * as Chain_id from './chain_id';
export * as Code from './code';
export * as Coin from './coin';
export * as Consensus_config from './consensus_config';
export * as Genesis from './genesis';
export * as Governance_proposal from './governance_proposal';
export * as Managed_coin from './managed_coin';
export * as Reconfiguration from './reconfiguration';
export * as Resource_account from './resource_account';
export * as Stake from './stake';
export * as System_addresses from './system_addresses';
export * as Timestamp from './timestamp';
export * as Token from './token';
export * as Token_transfers from './token_transfers';
export * as Transaction_context from './transaction_context';
export * as Transaction_fee from './transaction_fee';
export * as Transaction_publishing_option from './transaction_publishing_option';
export * as Validator_set_script from './validator_set_script';
export * as Version from './version';
export * as Vm_config from './vm_config';
export * as Voting from './voting';


export function loadParsers(repo: AptosParserRepo) {
  Account.loadParsers(repo);
  Account_utils.loadParsers(repo);
  Aptos_coin.loadParsers(repo);
  Aptos_governance.loadParsers(repo);
  Block.loadParsers(repo);
  Bucket_table.loadParsers(repo);
  Chain_id.loadParsers(repo);
  Code.loadParsers(repo);
  Coin.loadParsers(repo);
  Consensus_config.loadParsers(repo);
  Genesis.loadParsers(repo);
  Governance_proposal.loadParsers(repo);
  Managed_coin.loadParsers(repo);
  Reconfiguration.loadParsers(repo);
  Resource_account.loadParsers(repo);
  Stake.loadParsers(repo);
  System_addresses.loadParsers(repo);
  Timestamp.loadParsers(repo);
  Token.loadParsers(repo);
  Token_transfers.loadParsers(repo);
  Transaction_context.loadParsers(repo);
  Transaction_fee.loadParsers(repo);
  Transaction_publishing_option.loadParsers(repo);
  Validator_set_script.loadParsers(repo);
  Version.loadParsers(repo);
  Vm_config.loadParsers(repo);
  Voting.loadParsers(repo);
}

export function getPackageRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}
