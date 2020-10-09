// Transaction Type is a MetaMask construct used internally
// 1. `'cancel'`              - A transaction submitted with the same nonce as a previous
//                              transaction, a higher gas price and a zeroed out send amount.
//                              Useful for users who accidentally send to erroneous addresses
//                              or if they send too much.
// 2. `'retry'`               - When a transaction is failed it can be retried by resubmitting
//                              the same transaction with a higher gas fee. This type is also
//                              used to speed up pending transactions. This is accomplished by
//                              creating a new tx with the same nonce and higher gas fees.
// 3. `'tranfser'`            - A token transaction where the user is sending tokens that they
//                              own to another address
// 4. `'transferfrom'`        - A token transaction transferring tokens from an account that
//                              the sender has an allowance of (see the approve category).
// 5. `'approve'`             - A token transaction requesting an allowance of the token to
//                              spend on behalf of the user
// 6. `'incoming'`            - An incoming (deposit) transaction
// 7. `'sentEther'`           - A transaction sending ether to a recipient
// 8. `'contractInteraction'` - A transaction that is interacting with a smart contract's methods
//                              that we have not treated as a special case, such as approve, transfer
//                              and transferfrom
// 9. `'contractDeployment'`  - A transaction that deployed a smart contract
// 10. `'swap'`               - A transaction swapping one token for another through MetaMask Swaps
// 11. `'swapApproval'`       - Similar to the approve category, a swap approval is a special case of
//                              ERC20 approve method that requests an allowance of hte token to spend
//                              on behalf of the user for the MetaMask Swaps contract. The first swap
//                              for any token will have an accompanying swapApproval transaction.
export const TRANSACTION_TYPE_CANCEL = 'cancel'
export const TRANSACTION_TYPE_RETRY = 'retry'
export const TRANSACTION_TYPE_TOKEN_METHOD_TRANSFER = 'transfer'
export const TRANSACTION_TYPE_TOKEN_METHOD_APPROVE = 'approve'
export const TRANSACTION_TYPE_TOKEN_METHOD_TRANSFER_FROM = 'transferfrom'
export const TRANSACTION_TYPE_INCOMING = 'incoming'
export const TRANSACTION_TYPE_SENT_ETHER = 'sentEther'
export const TRANSACTION_TYPE_CONTRACT_INTERACTION = 'contractInteraction'
export const TRANSACTION_TYPE_DEPLOY_CONTRACT = 'contractDeployment'
export const TRANSACTION_TYPE_SWAP = 'swap'
export const TRANSACTION_TYPE_SWAP_APPROVAL = 'swapApproval'

/**
 * Any transaction that interacts with functions defined in a smart contract
 * is a 'ContractInteraction'. MetaMask has special cases to cover interactions
 * that we need to handle differently. These are represented by their own distinct
 * types (e.g, 'approve')
 * @typedef {'transfer' | 'approve' | 'transferfrom' | 'contractInteraction' } ContractInteractionTransactionTypes
 */

/**
 * An additional set of special cases for 'contractInteraction' transaction types
 * are those for MetaMask Swaps. Both of these transaction types are interacting
 * with the Swaps contract, but they are treated differently in the backend and UI
 * and thus have their own type.
 * @typedef { 'swap' | 'swapApproval' } SwapsTransactionTypes
 */

/**
 * When a user attempts to retry or cancel a transaction, MetaMask submits a new
 * transaction with the same nonce. This new transaction has its type set to a special
 * case so that the extension can treat them differently than their normal transaction
 * type.
 * @typedef {'cancel' | 'retry'} SpecialTransactionTypes
 */

/**
 * Any transaction type that is inferrable by examining the transaction details. This serves
 * as the primary return type for _determineTransactionType in the transaction controller
 * @typedef { ContractInteractionTransactionTypes | 'sentEther' } InferrableTransactionTypes
 */

/**
 * @typedef { SpecialTransactionTypes | SwapsTransactionTypes | InferrableTransactionTypes | 'incoming' } TransactionType
 */

// Transaction Status is a mix of Ethereum terminology and MetaMask construct
// 1. `'unapproved'` - A new transaction that the user has not approved or rejected
// 2. `'approved'`   - The user has approved the transaction in the MetaMask UI
// 3. `'rejected'`   - The user has rejected the transaction in the MetaMask UI
// 4. `'signed'`     - The transaction has been signed
// 5. `'submitted'`  - The transaction has been submitted
// 6. `'failed'`     - The transaction has failed for some reason
// 7. `'dropped'`    - The transaction was dropped due to a tx with same nonce being accepted
export const TRANSACTION_STATUS_APPROVED = 'approved'
export const TRANSACTION_STATUS_CONFIRMED = 'confirmed'
export const TRANSACTION_STATUS_UNAPPROVED = 'unapproved'
export const TRANSACTION_STATUS_REJECTED = 'rejected'
export const TRANSACTION_STATUS_SIGNED = 'signed'
export const TRANSACTION_STATUS_SUBMITTED = 'submitted'
export const TRANSACTION_STATUS_FAILED = 'failed'
export const TRANSACTION_STATUS_DROPPED = 'dropped'

/**
 * @typedef { 'approved' | 'confirmed' | 'unapproved' | 'rejected' | 'signed' | 'submitted' | 'failed' | 'dropped' } TransactionStatus
 */

// Transaction Category is a MetaMask construct used internally
// Used to categorize transactions by purpose for displaying information to the user

// Transaction Group Status is a MetaMask construct to track status of groups
// of transactions.
// 1. `'cancelled'` - A cancel type transaction in the group was confirmed
// 2. `'pending'`   - The primaryTransaction of the group has a status that is one of:
//                    1. TRANSACTION_STATUS_APPROVED
//                    2. TRANSACTION_STATUS_UNAPPROVED
//                    3. TRANSACTION_STATUS_SUBMITTED
export const TRANSACTION_GROUP_STATUS_CANCELLED = 'cancelled'
export const TRANSACTION_GROUP_STATUS_PENDING = 'pending'

// Transaction Group Category is a MetaMask construct to categorize the intent
// of a group of transactions for purposes of displaying in the UI
// 1. `'send'`              - Transaction group representing ether being sent from the user.
// 2. `'receive'`           - Transaction group representing a deposit/incoming transaction
//                            maps 1:1 with TRANSACTION_TYPE_INCOMING.
// 3. `'interaction'`       - Transaction group representing an interaction with a smart
//                            contract's methods.
// 4. `'approval'`          - Transaction group representing a request for an allowance
//                            of a token to spend on the user's behalf.
// 5. `'signature-request'` - Transaction group representing a signature request
//                            This currently only shows up in the UI when its pending
//                            user approval in the UI. Once the user approves or rejects
//                            it will no longer show in activity.
// 6. `'swap'`              - Transaction group representing a token swap through MetaMask
//                            Swaps. This transaction group's primary currency changes depending
//                            on context. If the user is viewing an asset page for a token
//                            received from a swap, the primary currency will be the received
//                            token. Otherwise the token exchanged will be shown.
export const TRANSACTION_GROUP_CATEGORY_SEND = 'send'
export const TRANSACTION_GROUP_CATEGORY_RECEIVE = 'receive'
export const TRANSACTION_GROUP_CATEGORY_INTERACTION = 'interaction'
export const TRANSACTION_GROUP_CATEGORY_APPROVAL = 'approval'
export const TRANSACTION_GROUP_CATEGORY_SIGNATURE_REQUEST = 'signature-request'
export const TRANSACTION_GROUP_CATEGORY_SWAP = 'swap'

// TODO: expand txParams, history, nonceDetails types
/**
 * An object representing a transaction, in whatever state it is in.
 * @typedef TransactionMeta
 *
 * @property {number} id                - An internally unique tx identifier.
 * @property {number} time              - Time the tx was first suggested, in unix epoch time (ms).
 * @property {TransactionStatus} status - The current transaction status
 * @property {string} metamaskNetworkId - The transaction's network ID, used for EIP-155 compliance.
 * @property {boolean} loadingDefaults  - Indicates to the UI that we are done calculating gas defaults
 * @property {Object} txParams          - The tx params as passed to the network provider.
 * @property {Object[]} history         - A history of mutations to this TransactionMeta object.
 * @property {string} origin            - A string representing the interface that suggested the transaction.
 * @property {Object} nonceDetails      - A metadata object containing information used to derive the suggested nonce, useful for debugging nonce issues.
 * @property {string} rawTx             - A hex string of the final signed transaction, ready to submit to the network.
 * @property {string} hash              - A hex string of the transaction hash, used to identify the transaction on the network.
 * @property {number} submittedTime     - The time the transaction was submitted to the network, in Unix epoch time (ms).
 * @property {TransactionType} type     - The type of transaction represented by this TransactionMeta
 */